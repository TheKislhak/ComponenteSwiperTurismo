import './Footer.css';
import Btn from '../Btn/Btn';

export default function Footer() {
  return (
    <footer className="cta-footer-container">
      <div className="cta-footer-content">
        <h2 className="cta-footer-title">
          Uma odisseia de expêriencia única!
        </h2>
        <p className="cta-footer-subtitle">
          Clique aqui para conversar com nossos corretores!
        </p>
        
        <Btn name="Whatsapp" />
      </div>
    </footer>
  );
}