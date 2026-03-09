import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const STORAGE_KEY = 'events';
const EventList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const navigate = useNavigate();
    const loadEvents = useCallback(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                parsed.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setEvents(parsed);
            }
            setError(null);
        } catch (err) {
            console.error('Error loading events:', err);
            setError('Failed to load events. Please try again.');
        } finally {
            setLoading(false);
        } }, []);
    useEffect(() => {
        loadEvents();
    }, [loadEvents]);
    const handleEdit = useCallback((id) => {
        navigate(`/edit-event/${id}`);
    }, [navigate]);
    const handleDelete = useCallback(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const updated = JSON.parse(stored).filter(e => e.id !== deleteId);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
                setEvents(updated);
                setDeleteId(null);
            }
        } catch (err) {
            console.error('Error deleting event:', err);
            setError('Failed to delete event. Please try again.');
        }
    }, [deleteId]);
    const closeDeleteModal = useCallback(() => {
        setDeleteId(null);
    }, []);
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape' && deleteId) {
            closeDeleteModal();
        }
    }, [deleteId, closeDeleteModal]);
    useEffect(() => {
        if (deleteId) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [deleteId, handleKeyDown]);
    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        return new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    if (loading) {
        return (
            <div className="loading" role="status" aria-label="Loading events">
                <div className="spinner"></div>
                <span className="visually-hidden">Loading events...</span>
            </div>
        );}
    if (error) {
        return (
            <div>
                <div className="page-header">
                    <h1 className="page-title">Event List</h1>
                    <p className="page-subtitle">Manage your events</p>
                </div>
                <div className="card">
                    <div className="empty-state" role="alert">
                        <h3>Error</h3>
                        <p>{error}</p>
                        <button
                            className="btn btn-primary"
                            onClick={loadEvents}
                            aria-label="Retry loading events"></button>
                            Try Again
                        </button> </div>
                </div>  </div>
        );}
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Event List</h1>
                <p className="page-subtitle">Manage your events</p>
            </div>

            <div className="actions-header">
                <h2>All Events ({events.length})</h2>
                <Link
                    to="/create-event"
                    className="btn btn-primary"
                    aria-label="Create new event"
                >
                    + Create Event
                </Link>
            </div>
            {events.length === 0 ? (
                <div className="card">
                    <div className="empty-state">
                        <h3>No Events Yet</h3>
                        <p>Create your first event to get started!</p>
                        <Link
                            to="/create-event"
                            className="btn btn-primary"
                            aria-label="Create your first event"></Link>                        
                            Create Event
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="table-container" role="region" aria-label="Events table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Location</th>
                                <th scope="col">Type</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map(event => (
                                <tr key={event.id}>
                                    <td>
                                        {event.image ? (
                                            <div className="event-image-cell">
                                                <img
                                                    src={event.image}
                                                    alt={`${event.name} event`}
                                                    className="event-thumbnail"
                                                /> </div>
                                        ) : (
                                            <div
                                                className="event-image-cell"
                                                style={{ background: '#e5e7eb' }}
                                                aria-label="No image"
                                            ></div>
                                        )}
                                    </td>
                                    <td style={{ fontWeight: '500' }}>{event.name}</td>
                                    <td>{formatDate(event.date)}</td>
                                    <td>{event.location}</td>
                                    <td>
                                        <span
                                            className="event-type-badge"
                                            aria-label={`Event type: ${event.eventType}`}>
                                            {event.eventType}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="table-actions">
                                            <button
                                                className="btn btn-warning btn-sm"
                                                onClick={() => handleEdit(event.id)}
                                                aria-label={`Edit ${event.name} event`}>
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => setDeleteId(event.id)}
                                                aria-label={`Delete ${event.name} event`}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {deleteId && (
                <div
                    className="modal-overlay"
                    onClick={closeDeleteModal}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="delete-modal-title"
                    aria-describedby="delete-modal-description"
                >
                    <div
                        className="modal"
                        onClick={e => e.stopPropagation()}
                        role="document"
                    >
                        <h3 id="delete-modal-title">Delete Event?</h3>
                        <p id="delete-modal-description">
                            This action cannot be undone. The event will be permanently removed.
                        </p>
                        <div className="modal-actions">
                            <button
                                className="btn btn-secondary"
                                onClick={closeDeleteModal}
                                autoFocus
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={handleDelete}
                                aria-label="Confirm delete"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventList;
