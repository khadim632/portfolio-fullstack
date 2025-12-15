import React, { useEffect, useState } from "react";
import { getProjets } from "../services/api";

const ProjetsList: React.FC = () => {
  const [projets, setProjets] = useState<any[]>([]);

  useEffect(() => {
    fetchProjets();
  }, []);

  const fetchProjets = async () => {
    try {
      const res = await getProjets();
      setProjets(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="p-6 grid md:grid-cols-3 gap-6">
      {projets.map((p) => (
        <div key={p._id} className="bg-white shadow rounded p-4">
          {p.imageUrl && <img src={p.imageUrl} alt={p.titre} className="h-40 w-full object-cover rounded" />}
          <h3 className="text-xl font-bold mt-2">{p.titre}</h3>
          <p className="text-gray-600">{p.description}</p>
          <div className="mt-2">
            {p.lienGithub && <a href={p.lienGithub} target="_blank" rel="noreferrer">GitHub</a>}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjetsList;
