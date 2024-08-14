import logo from './logo.svg';
import './App.css';

async function uploadPost(data) {
    await fetch('http://localhost:8000/api/posts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

async function getPosts() {
    const response = await fetch('http://localhost:8000/api/posts/');
    const data = await response.json();
    console.log(data);
    return data;
}

function App() {
    const data = {
        title: ''
    };
    var posts = getPosts();
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <input type="text" onClick={uploadPost(data)} value={data.title} />
            </header>
            {posts ?? posts.map((post) => <div key={post.id}>{post.title}</div>)}
        </div>
    );
}

export default App;
