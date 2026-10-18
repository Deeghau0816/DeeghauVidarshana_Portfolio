// src/components/PageBackground.jsx

export default function PageBackground({
  videoSrc = "/videos/BackgroundVideo.mp4",
  showBlobs = true,
}) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-white/40" />
      <div className="absolute inset-0 bg-slate-200/20" />

      {/* Soft blobs */}
      {showBlobs && (
        <>
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />

          <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-cyan-500/12 blur-3xl" />

          <div className="absolute -bottom-24 left-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        </>
      )}

    </div>
  );
}