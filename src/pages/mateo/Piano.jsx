import React, { useEffect, useState, useRef } from "react";
import "./Piano.css";

const notas = {
  a: { nombre: "Fa", frecuencia: 349.23 },
  s: { nombre: "Sol", frecuencia: 392.0 },
  d: { nombre: "La", frecuencia: 440.0 },
  f: { nombre: "Si", frecuencia: 493.88 },
  g: { nombre: "Do", frecuencia: 523.25 },
  h: { nombre: "Re", frecuencia: 587.33 },
  j: { nombre: "Mi", frecuencia: 659.25 },
  k: { nombre: "Fa (agudo)", frecuencia: 698.46 },
  l: { nombre: "Sol (agudo)", frecuencia: 783.99 },
  ";": { nombre: "La (agudo)", frecuencia: 880.0 },
  "'": { nombre: "Si (agudo)", frecuencia: 987.77 },
  r: { nombre: "La#", frecuencia: 466.16 },
  u: { nombre: "Re#", frecuencia: 622.25 },
  o: { nombre: "Fa#", frecuencia: 739.99 },
  p: { nombre: "Sol#", frecuencia: 830.61 }
};

// Secuencia a seguir
const secuencia = "HARLLKHARLLKHHRGHHGHUKUHGGHUKKUHGHHHK;LLLH;";

const playNote = (frequency) => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  const real = new Float32Array([0, 1, 0.5, 0.25, 0.1]);
  const imag = new Float32Array(real.length);
  const customWave = audioCtx.createPeriodicWave(real, imag);

  oscillator.setPeriodicWave(customWave);
  oscillator.frequency.value = frequency;

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  const now = audioCtx.currentTime;
  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(1, now + 0.01);
  gainNode.gain.linearRampToValueAtTime(0.4, now + 0.2);
  gainNode.gain.linearRampToValueAtTime(0.001, now + 0.6);

  oscillator.start(now);
  oscillator.stop(now + 0.6);
};

export default function PianoGame() {
  const [powerOn, setPowerOn] = useState(false);
  const [selectedSong, setSelectedSong] = useState("");
  const [countdown, setCountdown] = useState(null);
  const [showGif, setShowGif] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(null);
  const [showScoreNotification, setShowScoreNotification] = useState(false);
  const currentIndex = useRef(0);

  const resetGame = () => {
    setSelectedSong("");
    setCountdown(null);
    setShowGif(false);
    setScore(0);
    setTimeLeft(null);
    currentIndex.current = 0;
    setShowScoreNotification(false);
  };

  const togglePower = () => {
    if (powerOn) resetGame();
    setPowerOn(!powerOn);
  };

  // Manejo de teclas adaptado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!powerOn) return;

      const key = event.key.toUpperCase();
      const nota = notas[event.key];

      // Reproducir sonido siempre que el piano esté encendido
      if (nota) playNote(nota.frecuencia);

      // Solo manejar secuencia si el juego está activo
      if (timeLeft !== null) {
        if (key === secuencia[currentIndex.current]) {
          currentIndex.current += 1;
          const newScore = Math.min(
            100,
            Math.floor((currentIndex.current / secuencia.length) * 100)
          );
          setScore(newScore);

          if (currentIndex.current === secuencia.length) {
            // Secuencia completada
            setTimeLeft(null);
            setShowGif(false);
            setShowScoreNotification(true);
          }
        } else {
          // Error: reducir puntaje más agresivo
          setScore((prev) => Math.max(0, prev - 5));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [powerOn, timeLeft]);

  // Cuenta regresiva antes de iniciar la canción
  useEffect(() => {
    if (selectedSong === "Song 1") {
      let count = 3;
      setCountdown(count);
      setShowGif(false);
      currentIndex.current = 0;
      setScore(0);

      const countdownInterval = setInterval(() => {
        count -= 1;
        if (count > 0) {
          setCountdown(count);
        } else {
          setCountdown(null);
          setShowGif(true);
          setTimeLeft(30); // Tiempo aumentado
          clearInterval(countdownInterval);
        }
      }, 1000);
    }
  }, [selectedSong]);

  // Temporizador del juego
  useEffect(() => {
    if (timeLeft === null) return;

    if (timeLeft <= 0) {
      setTimeLeft(null);
      setShowGif(false);
      setShowScoreNotification(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="piano-wrapper">
      {/* Controles */}
      <div className="controls">
        <button onClick={togglePower}>
          {powerOn ? "Apagar" : "Iniciar"}
        </button>
        <select
          value={selectedSong}
          onChange={(e) => setSelectedSong(e.target.value)}
          disabled={!powerOn}
        >
          <option value="">--Seleccionar cancion--</option>
          <option value="Song 1">Bohemian Rhapsody - Queen 🤟</option>
        </select>
        {countdown && <span className="countdown">{countdown}</span>}
        {timeLeft !== null && <span className="countdown">{timeLeft}</span>}
      </div>

      {/* Puntaje tipo cómic */}
      {showScoreNotification && (
        <div className="score-notification">
          Puntaje final: {score}
        </div>
      )}

      {/* GIF decorativo */}
      {powerOn && showGif && (
        <div className="decoracion">
          <video
    src="/public/juegoMateo/part.mp4" // ruta relativa dentro de la carpeta public
    autoPlay
    loop
    muted
    playsInline
    className="video-decoracion"
  />
        </div>
      )}

      {/* Piano */}
      <div className="piano">
        <div className="teclas-blancas">
          {["Fa", "Sol", "La", "Si", "Do", "Re", "Mi", "Fa", "Sol", "La", "Si"].map(
            (nota, i) => (
              <div key={i} className="tecla-blanca">
                {nota}
              </div>
            )
          )}
        </div>

        <div className="teclas-negras">
          {["Fa#", "Sol#", "La#", "", "Do#", "Re#", "", "Fa#", "Sol#"].map(
            (nota, i) =>
              nota ? (
                <div key={i} className="tecla-negra">
                  {nota}
                </div>
              ) : (
                <div key={i} className="tecla-negra vacia"></div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
