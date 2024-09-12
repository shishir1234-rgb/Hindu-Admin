import React from 'react';
import './Profile.scss';
import imageHindu from '../../assets/hinduicon.png'
import { User, Mail, Phone, MapPin, Globe, Calendar, Briefcase, Star, Video, Image, Facebook, Instagram, Linkedin, skype } from 'lucide-react';

const Profile = ({ company }) => {
  return (
    <div className="admin-profile">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={imageHindu} alt="Hindu Business Directory Logo" />
        </div>
        <h1 className="profile-name">Hindu Business Directory</h1>
        <p className="profile-category">{company.category}</p>
        <div className="profile-rating">
          <Star className="star-icon" />
          <span>{company.averageRating.toFixed(1)} ({company.reviewCount} reviews)</span>
        </div>
      </div>
      <div className="profile-content">
      <div className="description-section">
          <h2>About Us</h2>
          <p>{company.description}</p>
        </div>
        <div className="info-section">
          <h2>Company Information</h2>
          <ul>
            <li><User size={20} /> {`${company.firstName} ${company.lastName}`}</li>
            <li><Mail size={20} /> {company.email}</li>
            <li><Phone size={20} /> {company.contactNo}</li>
            <li><MapPin size={20} /> {`${company.address}, ${company.state}, ${company.pincode}, ${company.country}`}</li>
            <li><Globe size={20} /> <a href={company.websiteURL} target="_blank" rel="noopener noreferrer">{company.websiteURL}</a></li>
            <li><Calendar size={20} /> Joined on {new Date(company.createdAt).toLocaleDateString()}</li>
          </ul>
        </div>
        {/* <div className="media-section">
          <h2>Media</h2>
          <div className="media-grid">
            {company.images.map((img, index) => (
              <div key={index} className="media-item">
                <Image size={24} />
                <img src={img} alt={`Company Image ${index + 1}`} />
              </div>
            ))}
            {company.videoURL && (
              <div className="media-item video">
                <Video size={24} />
                <a href={company.videoURL} target="_blank" rel="noopener noreferrer">Watch Video</a>
              </div>
            )}
          </div>
        </div> */}
        
        <div className="social-section">
          <h2>Connect With Us</h2>
          <div className="social-links">
            {company.socialMedia.facebook && <a href={company.socialMedia.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>}
            {company.socialMedia.instagram && <a href={company.socialMedia.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>}
            {company.socialMedia.linkedin && <a href={company.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>}
            {company.socialMedia.skype && <a href={company.socialMedia.skype} target="_blank" rel="noopener noreferrer"></a>}
          </div>
        </div>
           <div className="media-section">
          <h2>Media</h2>
          <div className="media-grid">
            {company.images.map((img, index) => (
              <div key={index} className="media-item">
                <Image size={24} />
                <img src={img} alt={`Company Image ${index + 1}`} />
              </div>
            ))}
            {company.videoURL && (
              <div className="media-item video">
                <Video size={24} />
                <a href={company.videoURL} target="_blank" rel="noopener noreferrer">Watch Video</a>
              </div>
            )}
          </div>
        </div>
      </div>
         {/* <div className="media-section">
          <h2>Media</h2>
          <div className="media-grid">
            {company.images.map((img, index) => (
              <div key={index} className="media-item">
                <Image size={24} />
                <img src={img} alt={`Company Image ${index + 1}`} />
              </div>
            ))}
            {company.videoURL && (
              <div className="media-item video">
                <Video size={24} />
                <a href={company.videoURL} target="_blank" rel="noopener noreferrer">Watch Video</a>
              </div>
            )}
          </div>
        </div> */}
    </div>
  );
};

export default Profile;
