import React, { useState } from 'react';
import './AboutPage.css';

// Danh sách 6 thành viên trong nhóm
const teamMembers = [
  {
    id: 1,
    name: 'Phạm Minh Hiển',
    role: 'Trưởng nhóm / Leader',
    email: 'aaaaa@gmail.com',
    phone: '00001',
    info: 'Chịu trách nhiệm quản lý dự án, phân chia công việc và kết nối các thành viên trong nhóm.'
  },
  {
    id: 2,
    name: 'Nguyễn Thành Đạt',
    role: 'Member',
    email: 'bbbbb@gmail.com',
    phone: '00002',
  },
  {
    id: 3,
    name: 'Huỳnh Tuấn Đạt',
    role: 'Member',
    email: 'ccccc@gmail.com',
    phone: '00003',
  },
  {
    id: 4,
    name: 'Võ Văn Khải',
    role: 'Member',
    email: 'ddddd@gmail.com',
    phone: '00004',
  },
  {
    id: 5,
    name: 'Đặng Thành Tân',
    role: 'Member',
    email: 'eeeee@gmail.com',
    phone: '00005',
  },
  {
    id: 6,
    name: 'Tô Văn Minh Nhật',
    role: 'Member',
    email: 'fffff@gmail.com',
    phone: '00006',
  }
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="about-container">
      {/* Tiêu đề trang */}
      <header className="about-header">
        <h1>Thành Viên Nhóm</h1>
        <p>Danh sách 6 thành viên tham gia phát triển dự án</p>
      </header>

      {/* Grid hiển thị 6 thành viên */}
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="card-avatar">
              <img src={member.avatar} alt={member.name} />
            </div>
            <div className="card-content">
              <h3>{member.name}</h3>
              <span className="role-tag">{member.role}</span>
              
              <div className="contact-info">
                <p><strong>Email:</strong> {member.email}</p>
                <p><strong>SĐT:</strong> {member.phone}</p>
              </div>

              <button 
                className="btn-view-detail"
                onClick={() => setSelectedMember(member)}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up / Modal Chi Tiết */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMember(null)}>&times;</button>
            
            <div className="modal-header">
              <img src={selectedMember.avatar} alt={selectedMember.name} />
              <div>
                <h2>{selectedMember.name}</h2>
                <span className="role-tag">{selectedMember.role}</span>
              </div>
            </div>

            <div className="modal-body">
              <div className="info-item">
                <label>Email liên hệ:</label>
                <p><a href={`mailto:${selectedMember.email}`}>{selectedMember.email}</a></p>
              </div>
              <div className="info-item">
                <label>Số điện thoại:</label>
                <p><a href={`tel:${selectedMember.phone}`}>{selectedMember.phone}</a></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}