import Image from "next/image";
import { icons } from "lucide-react";


const { Spotify, SoundCloud, Instagram, Twitter, Youtube, Music2 } = icons;

export default function MusicPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12 z-[99]">
      {/* Navbar */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-4 px-6 bg-white/10 rounded-lg shadow-lg fixed top-0 backdrop-blur-md">
        <h1 className="text-2xl font-bold">Burna</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-white/80 transition">About</a>
          <a href="#music" className="hover:text-white/80 transition">Music</a>
          <a href="#contact" className="hover:text-white/80 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className=" mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-5xl font-extrabold">Oluwa Burna Fan Base</h1>
          <p className="mt-4 text-lg text-white/80">Music Producer | Singer | Songwriter</p>
          <a
            href="https://audiomack.com/burna-boy"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transition"
          >
            Listen to My Work
          </a>
        </div>
        <Image
          src="/burna2.jpeg"
          width={300}
          height={200}
          alt="Album Cover"
          className="mx-auto rounded-full shadow-md w-full md:w-auto"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* About Section */}
      <div id="about" className="mt-16 max-w-3xl text-center">
        <h2 className="text-3xl font-bold">About Burna Boy</h2>
        <p className="mt-4 text-white/80">Burna Boy, also known as the African Giant, is a Grammy Award-winning artist known for his unique fusion of Afrobeats, reggae, and dancehall.
          With powerful storytelling, deep-rooted African rhythms, and a charismatic stage presence, he has redefined global music.
          From his breakout hit # Like to Party to chart-topping albums like <em>African Giant</em> and <em>Twice As Tall</em>, Burna Boy continues to make waves, representing Africa on the world stage.
          His music is not just sound—its a movement, a culture, and a voice for the people. </p>
      </div>

      {/* Music Projects */}
      <div className="mt-16">
        <h2 className="text-3xl text-center font-bold mb-5">Burna Boy Projects</h2>
        <div id="music" className="w-full max-w-4xl justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 p-6 rounded-lg shadow-lg text-center hover:bg-white/20 transition">
            <Image
              src="/love-damini.jpeg"
              width={300}
              height={200}
              alt="Album Cover"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-xl font-bold mt-4">Love Damini</h3>
            <p className="text-white/70">2022</p>
            <a
              href="https://audiomack.com/burna-boy/album/love-damini-af-version"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transition"
            >
              Listen to My Work
            </a>
          </div>

          <div className="bg-white/10 p-6 rounded-lg shadow-lg text-center hover:bg-white/20 transition">
            <Image
              src="/i-told-them.jpeg"
              width={300}
              height={200}
              alt="Single Cover"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-xl font-bold mt-4">I told them</h3>
            <p className="text-white/70">2023</p>
            <a
              href="https://audiomack.com/burna-boy/album/i-told-them-af"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transition"
            >
              Listen to My Work
            </a>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-lg text-center hover:bg-white/20 transition">
            <Image
              src="/twice-as-tall.jpeg"
              width={300}
              height={200}
              alt="Single Cover"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-xl font-bold mt-4">Twice as tall</h3>
            <p className="text-white/70">2020</p>
            <a
              href="https://audiomack.com/burna-boy/album/twice-as-tall-africa"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transition"
            >
              Listen to My Work
            </a>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-lg text-center hover:bg-white/20 transition">
            <Image
              src="/africa-giant.jpeg"
              width={300}
              height={200}
              alt="Single Cover"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-xl font-bold mt-4">African Giant</h3>
            <p className="text-white/70">2019</p>
            <a
              href="https://audiomack.com/burna-boy/album/african-giant-af-version"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transition"
            >
              Listen to My Work
            </a>
          </div>
        </div>
      </div>


      {/* Contact Section */}
      <div id="contact" className="mt-16 max-w-3xl text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-4 text-white/80">For bookings, collaborations, or inquiries, reach out to me via email or social media.</p>
        <button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transition">Contact Me</button>
      </div>

{/* Social Media & Contact */}
<div className="mt-12 flex space-x-6">
  <a href="https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">
    <Spotify size={32} />
  </a>
  <a href="https://soundcloud.com/burnaboy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">
    <Soundcloud size={32} />
  </a>
  <a href="https://www.instagram.com/burnaboygram/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">
    <Instagram size={32} />
  </a>
  <a href="https://twitter.com/burnaboy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">
    <Twitter size={32} />
  </a>
  <a href="https://www.youtube.com/c/BurnaBoyOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">
    <Youtube size={32} />
  </a>
  <a href="https://www.tiktok.com/@burnaboy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">
    <Music size={32} />
  </a>
</div>



      {/* Footer */}
      <footer className="mt-16 w-full max-w-6xl text-center border-t border-white/20 py-6">
        <p className="text-white/70">© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
