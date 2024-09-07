import Blog from "./components/Blog";
import Navbar from "./components/Navbar";

function App() {

  const blogs = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magnam officiis explicabo soluta, quibusdam aperiam nihil voluptates adipisci esse voluptate quae? Repellendus, excepturi sequi! Doloremque explicabo quasi doloribus deleniti dolore consequuntur, aspernatur voluptate ut sunt blanditiis suscipit accusantium aut tempore.'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magnam officiis explicabo soluta, quibusdam aperiam nihil voluptates adipisci esse voluptate quae? Repellendus, excepturi sequi! Doloremque explicabo quasi doloribus deleniti dolore consequuntur, aspernatur voluptate ut sunt blanditiis suscipit accusantium aut tempore.'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magnam officiis explicabo soluta, quibusdam aperiam nihil voluptates adipisci esse voluptate quae? Repellendus, excepturi sequi! Doloremque explicabo quasi doloribus deleniti dolore consequuntur, aspernatur voluptate ut sunt blanditiis suscipit accusantium aut tempore.'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magnam officiis explicabo soluta, quibusdam aperiam nihil voluptates adipisci esse voluptate quae? Repellendus, excepturi sequi! Doloremque explicabo quasi doloribus deleniti dolore consequuntur, aspernatur voluptate ut sunt blanditiis suscipit accusantium aut tempore.'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magnam officiis explicabo soluta, quibusdam aperiam nihil voluptates adipisci esse voluptate quae? Repellendus, excepturi sequi! Doloremque explicabo quasi doloribus deleniti dolore consequuntur, aspernatur voluptate ut sunt blanditiis suscipit accusantium aut tempore.'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magnam officiis explicabo soluta, quibusdam aperiam nihil voluptates adipisci esse voluptate quae? Repellendus, excepturi sequi! Doloremque explicabo quasi doloribus deleniti dolore consequuntur, aspernatur voluptate ut sunt blanditiis suscipit accusantium aut tempore.'
    }
  ]

  return (
    <main style={{ padding: 10 }}>
      <Navbar />
      <div>
        <h2>Welcome To Dummy Blog</h2>
      </div>
      <div>
        <h3 className="tech">Latest Technologies</h3>
      </div>
      <Blog />
      <footer>All rights reserved @ dummy blog</footer>
    </main>
  );
}

export default App;
