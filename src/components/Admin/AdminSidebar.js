import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';  // Importez le fichier CSS ici

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h3>Admin Panel</h3>
      <section>
        <ul>
          <li>
            <Link to="/admin/history">Historique des achats</Link>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <Link to="/admin/products">Gestion des produits</Link>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <Link to="/admin/other">Autre section</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AdminSidebar;
