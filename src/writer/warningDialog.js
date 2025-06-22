import React from 'react';

function WarningDialog({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: '#fff',
        padding: '32px 24px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        minWidth: '280px',
        textAlign: 'center'
      }}>
        <div style={{ 
            marginBottom: '16px', 
            fontSize: '18px', 
            color: '#ad6800' 
            }}>
          您还没有登录
        </div>
        <button
          onClick={onClose}
          style={{
            padding: '8px 24px',
            background: '#faad14',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          关闭
        </button>
      </div>
    </div>
  );
}

export default WarningDialog;