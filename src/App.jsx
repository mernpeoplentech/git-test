import Blog from "./components/Blog";

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
      
      <div >
        <h4 style={{display: 'flex', justifyContent: 'center', fontSize: '36px', color: 'darkblue' }}>
          My Blogs
        </h4>
      <div style={{display: 'grid',   gap: '12px'}}>
        {
          blogs.map(item => (
            <Blog blog={item}/>
          ))
        }
      </div>
      </div>
    </main>
  );
}

export default App;
