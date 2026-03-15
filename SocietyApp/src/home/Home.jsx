import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();

return (
    <div className="home-container">
    <div className="home-content">
        <h1>Welcome to Housing Society Management System</h1>
        
        <div className="home-subtitle">
        <p>Streamline your person management process</p>
        </div>
        
        <div className="buttons-grid">
        <div className="button-card">
            <h3>Go to List Person</h3>
            <p>Browse through all persons in your organization</p>
            <button className="view-btn" onClick={() => navigate('/getAll')}>List Person</button>
        </div>
        
        <div className="button-card">
            <h3>Add New Person</h3>
            <p>Add new persons to your organization</p>
            <button className="add-btn" onClick={() => navigate('/post')}>Add New Person</button>
        </div>
        </div>
    </div>
    </div>
);
};

export default Home;