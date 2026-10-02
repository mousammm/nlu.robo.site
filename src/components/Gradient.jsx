import './Gradient.css';

export default function GlobalBackground() {
  return (
    <div className="global-bg" aria-hidden="true">
      <div className="global-bg__noise" />
      <div className="glow-sphere glow-1" />
      <div className="glow-sphere glow-2" />
      <div className="glow-sphere glow-3" />
      <div className="glow-sphere glow-4" />
    </div>
  );
}
