// Payment.js
import React from 'react';

const Payment = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{
                minHeight: '100vh',
                backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1950&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '20px',
            }}
        >
            <div className="container" style={{ maxWidth: '600px' }}>
                <h2 className="mb-4 text-center text-white text-shadow">Payment Gateway</h2>

                <div
                    className="card p-4 shadow"
                    style={{
                        backdropFilter: 'blur(10px)',
                        background: 'rgba(255, 255, 255, 0.85)',
                        borderRadius: '16px',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    }}
                >
                    <h5 className="mb-3">Billing Details</h5>
                    <form>
                        <div className="mb-3">
                            <label>Name on Card</label>
                            <input type="text" className="form-control" placeholder="Full Name" required />
                        </div>
                        <div className="mb-3">
                            <label>Card Number</label>
                            <input type="text" className="form-control" placeholder="xxxx-xxxx-xxxx-xxxx" required />
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label>Expiry Date</label>
                                <input type="text" className="form-control" placeholder="MM/YY" required />
                            </div>
                            <div className="col">
                                <label>CVV</label>
                                <input type="password" className="form-control" placeholder="123" required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>Amount</label>
                            <input type="text" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-success w-100">
                            Proceed to Pay
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;
