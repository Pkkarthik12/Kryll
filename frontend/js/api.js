const API = {
    async chat(message) {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch AI response');
        }
        
        return await response.ok ? response.json() : null;
    }
};
