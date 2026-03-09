import React, { useState, useEffect, useRef } from 'react';

const EventForm = ({ event, onSubmit, onCancel, isEditing = false }) => {

    const [formData, setFormData] = useState({
        name: '',
        date: '',
        location: '',
        description: '',
        eventType: '',
        image: null
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (event) {
            setFormData({
                name: event.name || '',
                date: event.date || '',
                location: event.location || '',
                description: event.description || '',
                eventType: event.eventType || '',
                image: event.image || null
            });
        }
    }, [event]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            setErrors(prev => ({ ...prev, image: 'Please select a valid image file' }));
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setErrors(prev => ({ ...prev, image: 'Image size must be less than 5MB' }));
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => setFormData(prev => ({ ...prev, image: reader.result }));
        reader.readAsDataURL(file);
    };

    const handleRemoveImage = () => {
        setFormData(prev => ({ ...prev, image: null }));
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Event name is required';
        if (!formData.date) newErrors.date = 'Event date is required';
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);
        onSubmit(formData);
    };

    return (
        <div className="card form-container">
            <div className="card-header">
                <h2>{isEditing ? 'Edit Event' : 'Create Event'}</h2>
            </div>

            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label className="form-label">Event Image</label>
                    {formData.image ? (
                        <div className="image-preview">
                            <img src={formData.image} alt="Event preview" className="preview-image" />
                        </div>
                    ) : (
                        <button type="button" className="image-upload-area" onClick={() => fileInputRef.current.click()}>
                            📷 Click to upload image
                        </button>
                    )}
                    <input type="file" ref={fileInputRef} accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                    {errors.image && <span className="form-error">{errors.image}</span>}
                    {formData.image && (
                        <div className="image-actions">
                            <button type="button" className="btn btn-primary btn-sm" onClick={() => fileInputRef.current.click()}>Change</button>
                            <button type="button" className="btn btn-danger btn-sm" onClick={handleRemoveImage}>Remove</button>
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label className="form-label">Event Name *</label>
                    <input type="text" name="name" className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Enter event name" value={formData.name} onChange={handleChange} />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Date *</label>
                        <input type="date" name="date" className={`form-input ${errors.date ? 'error' : ''}`} value={formData.date} onChange={handleChange} />
                        {errors.date && <span className="form-error">{errors.date}</span>}
                    </div>
                    <div className="form-group">
                        <label className="form-label">Location *</label>
                        <input type="text" name="location" className={`form-input ${errors.location ? 'error' : ''}`} placeholder="Enter location" value={formData.location} onChange={handleChange} />
                        {errors.location && <span className="form-error">{errors.location}</span>}
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Event Type</label>
                    <input type="text" name="eventType" className="form-input" placeholder="Enter event type" value={formData.eventType} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea name="description" className="form-textarea" placeholder="Enter description" value={formData.description} onChange={handleChange} rows={4} />
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? (isEditing ? 'Updating...' : 'Creating...') : (isEditing ? 'Update Event' : 'Create Event')}
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={onCancel} disabled={isSubmitting}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EventForm;

