 import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProjectRK4 = () => {
  const [funcion, setFuncion] = useState("");
  const [x0, setX0] = useState("");
  const [y0, setY0] = useState("");
  const [xf, setXf] = useState("");
  const [h, setH] = useState("");
  const [resultados, setResultados] = useState([]);

  const handleCalcular = () => {
    setResultados([]);
    if (!funcion || !x0 || !y0 || !xf || !h) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    let f;
    try {
      f = new Function("x", "y", `return ${funcion}`);
      f(0, 0);
    } catch {
      toast.error("Función inválida");
      return;
    }

    let x = parseFloat(x0);
    let y = parseFloat(y0);
    const xfNum = parseFloat(xf);
    const hNum = parseFloat(h);

    if (isNaN(x) || isNaN(y) || isNaN(xfNum) || isNaN(hNum)) {
      toast.error("Valores numéricos inválidos");
      return;
    }

    const datos = [];
    while (x <= xfNum) {
      const k1 = hNum * f(x, y);
      const k2 = hNum * f(x + hNum / 2, y + k1 / 2);
      const k3 = hNum * f(x + hNum / 2, y + k2 / 2);
      const k4 = hNum * f(x + hNum, y + k3);
      y = y + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
      datos.push({ x: x.toFixed(4), y: y.toFixed(4) });
      x += hNum;
    }

    setResultados(datos);
    toast.success("Cálculo completado");
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-5xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
        Calculadora RK4
      </h2>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mb-3">
        <input
          type="text"
          placeholder="Función dy/dx = f(x,y)"
          value={funcion}
          onChange={(e) => setFuncion(e.target.value)}
          className="p-2 border border-white rounded bg-transparent text-white placeholder-white col-span-1 sm:col-span-2 md:col-span-5"
        />
        <input
          type="number"
          placeholder="x0"
          value={x0}
          onChange={(e) => setX0(e.target.value)}
          className="p-2 border border-white rounded bg-transparent text-white placeholder-white"
        />
        <input
          type="number"
          placeholder="y0"
          value={y0}
          onChange={(e) => setY0(e.target.value)}
          className="p-2 border border-white rounded bg-transparent text-white placeholder-white"
        />
        <input
          type="number"
          placeholder="xf"
          value={xf}
          onChange={(e) => setXf(e.target.value)}
          className="p-2 border border-white rounded bg-transparent text-white placeholder-white"
        />
        <input
          type="number"
          placeholder="h (paso)"
          value={h}
          onChange={(e) => setH(e.target.value)}
          className="p-2 border border-white rounded bg-transparent text-white placeholder-white"
        />
      </div>

      <div className="flex justify-center md:justify-start mb-4">
        <button
          onClick={handleCalcular}
          className="px-4 py-2 bg-primary text-black font-semibold rounded hover:bg-primary/80 transition-colors"
        >
          Calcular
        </button>
      </div>

      {/* Tabla */}
      {resultados.length > 0 && (
        <div className="overflow-x-auto mt-4">
          <table className="table-auto border-collapse border border-white w-full text-white text-sm sm:text-base">
            <thead>
              <tr>
                <th className="border border-white px-2 py-1">x</th>
                <th className="border border-white px-2 py-1">y</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((item, index) => (
                <tr key={index}>
                  <td className="border border-white px-2 py-1">{item.x}</td>
                  <td className="border border-white px-2 py-1">{item.y}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Gráfico */}
      {resultados.length > 0 && (
        <div className="mt-6 w-full h-64 sm:h-80 md:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={resultados}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="x" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderRadius: "5px" }} />
              <Line type="monotone" dataKey="y" stroke="#0ea5e9" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};
