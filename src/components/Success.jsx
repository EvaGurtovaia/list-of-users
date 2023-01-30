import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Done</h3>
      <p>Invintation sent to {count} users.</p>
      <button className="send-invite-btn">Back</button>
    </div>
  );
};