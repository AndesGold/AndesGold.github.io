body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
}

.navbar {
  position: fixed;
  width: 100%;
  background: transparent;
  color: white;
  z-index: 999;
  display: flex;
  justify-content: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: yellow;
}

.nav-toggle {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
}

.hero {
  height: 100vh;
  background: url('hero.jpg') center/cover no-repeat;
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
}

.hero-content {
  position: relative;
  z-index: 10;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.hero button {
  padding: 0.75rem 2rem;
  background: yellow;
  color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.section {
  padding: 4rem 1rem;
}

.grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 1.5rem;
  text-align: center;
}

.card img {
  width: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.green-bg {
  background: #e6f4ea;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: auto;
}

form input, form textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

form button {
  background: #15b364;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.footer {
  background: #004d40;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: #004d40;
    padding: 1rem;
  }
  .nav-links.show {
    display: flex;
  }
  .nav-toggle {
    display: block;
  }
}

