import {
  FaCode,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Profile({
  name = "Mahdia Hassani",
  role = "Front-end Developer",
  location = "Kabul, Afghanistan",
  bio = "I enjoy building clean and simple web interfaces using React. I focus on user-friendly design and smooth experiences.",
  avatar = "/images/Mahdia.jpg",
}) {
  return (
    <section id="profile" className="profile">
      <div className="profile-inner">
        <div className="profile-card">
          {/* AVATAR */}
          <div className="profile-avatar">
            <img src={avatar} alt={name} />
          </div>

          {/* INFO */}
          <div className="profile-info">
            <h2 className="profile-name">{name}</h2>

            <p className="profile-role">
              <FaCode /> {role}
            </p>

            <p className="profile-loc">
              <FaMapMarkerAlt /> {location}
            </p>

            <p className="profile-bio">{bio}</p>

            {/* SOCIAL ICONS */}
            <div className="profile-socials">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="profile-social"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="profile-social"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="profile-social"
              >
                <FaTwitter />
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
