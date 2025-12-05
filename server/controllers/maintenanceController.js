import supabase from '../config/db.js';

export const getMaintenanceLog = async (req, res) => {
    const userId = req.params.id

    try {
        const { data, error } = await supabase
        .from('maintenance_log')
        .select()
        .eq('id', userId);

        if (error) {
            return res.status(400).json({ error: error.message });
        }
    return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ err: 'Server error' });
    }
}

export const addMaintenanceItem = async (req, res) => {
    const { serviceDate, serviceItem, mileage, notes } = req.body;
    try {
    const { data, error } = await supabase
    .from('maintenance_log')
    .insert({ date_of_service: serviceDate, service_item: serviceItem, mileage, notes })
    .select()
    .eq('id', userId);

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({err: 'Server error'});
    }
}

export const editMaintenanceItem = async (req, res) => {
    const updates = req.body;
    try {
    const { data, error } = await supabase
    .from('maintenance_log')
    .update(updates)
    .eq('id', req.params.itemId)
    .select()
    .eq('id', userId);

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    return res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({err: 'Server error'});
    }

}

export const deleteMaintenanceItem = async (req, res) => {
    const {id} = req.body;
    try {
    const { data, error } = await supabase
    .from('maintenance_log')
    .delete()
    .eq('id', id)
    .select()
    .eq('id', userId);

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    return res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({err: 'Server error'});
    }

}
