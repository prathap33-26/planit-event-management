import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EventForm from '../../components/forms/EventForm';
const STORAGE_KEY = 'events';
const UpdateEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const loadEvent = useCallback(() => {
        try {
            const storedEvents = localStorage.getItem(STORAGE_KEY);
            if (storedEvents) {
                const events = JSON.parse(storedEvents);
                const foundEvent = events.find(e => e.id === id);
                if (foundEvent) {
                    setEvent(foundEvent);
                    setError(null);
                } else {
                    setError('Event not found');
                }
            } else {
                setError('No events found');
            }
        } catch (err) {
            console.error('Error loading event:', err);
            setError('Failed to load event');
        } finally {
            setLoading(false);
        }
    }, [id]);
    useEffect(() => {
        if (id) {
            loadEvent();
        } else {
            setError('Invalid event ID');
            setLoading(false);
        }
    }, [id, loadEvent]);
    const handleSubmit = useCallback((formData) => {
        try {
            setError(null);
            const storedEvents = localStorage.getItem(STORAGE_KEY);
            if (storedEvents) {
                const events = JSON.parse(storedEvents);

                const eventIndex = events.findIndex(e => e.id === id);
                if (eventIndex !== -1) {
                    events[eventIndex] = {
                        ...events[eventIndex],
                        ...formData,
                        updatedAt: new Date().toISOString()
                    };
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
                    navigate('/');
                } else {
                    setError('Event not found');
                }
            }
        } catch (err) {
            console.error('Error updating event:', err);
            setError('Failed to update event. Please try again.');
        }
    }, [id, navigate]);
    const handleCancel = useCallback(() => {
        navigate('/');
    }, [navigate]);

    if (loading) {
        return (
            <div className="loading" role="status" aria-label="Loading event">
                <div className="spinner"></div>
                <span className="visually-hidden">Loading event...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <div className="page-header">
                    <h1 className="page-title">Edit Event</h1>
                    <p className="page-subtitle">Update an existing event</p>
                </div>

                <div className="card">
                    <div className="empty-state" role="alert">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            style={{ width: 48, height: 48, marginBottom: 16, color: '#dc2626' }}
                            aria-hidden="true">
                        <h3>Event Not Found</h3>
                        <p>{error}</p>
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate('/')}
                            aria-label="Back to event list"></button>
                            Back to Event List
                        </button>
                    </div>
                </div>
            </div>);}
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Edit Event</h1>
                <p className="page-subtitle">Update an existing event</p>
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
                    }}>
                    {error}
                </div>
            )}
            <EventForm
                event={event}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                isEditing={true} />
        </div>
    );
};

export default UpdateEvent;
