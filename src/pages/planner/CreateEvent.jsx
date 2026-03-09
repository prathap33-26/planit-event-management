import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import EventForm from '../../components/forms/EventForm';
const STORAGE_KEY = 'events';
const CreateEvent = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const handleSubmit = useCallback((formData) => {
        try {
            setError(null);
            const storedEvents = localStorage.getItem(STORAGE_KEY);
            const events = storedEvents ? JSON.parse(storedEvents) : [];
            const newEvent = {
                id: Date.now().toString(),
                ...formData,
                createdAt: new Date().toISOString()
            };
            events.push(newEvent);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
            navigate('/');
        } catch (err) {
            console.error('Error creating event:', err);
            setError('Failed to create event. Please try again.');
        }
    }, [navigate]);
    const handleCancel = useCallback(() => {
        navigate('/');
    }, [navigate]);
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Create Event</h1>
                <p className="page-subtitle">Add a new event to your planner</p>
            </div>
            {error && (
                <div
                    className="error-banner"
                    role="alert"
                    style={{
                        background: '#fee2e2',
                        color: '#dc2626',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        marginBottom: '20px'
                    }}
                >
                    {error}
                </div>
            )}
            <EventForm
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                isEditing={false}
            />
        </div>
    );
};

export default CreateEvent;
