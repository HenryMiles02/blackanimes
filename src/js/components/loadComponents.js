async function loadComponent(id, path, scriptPath = null) {
  try {
    const res = await fetch(path);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

// Se houver um script extra a carregar

    if (scriptPath) {
      const script = document.createElement("script");
      script.src = scriptPath;
      script.defer = true;
      document.body.appendChild(script);
    }
  } catch (error) {
    console.error(`Erro ao carregar ${path}:`, error);
  }
}

// Carregar nav + script

loadComponent("nav", "src/components/nav.html", "src/js/components/nav.js");
