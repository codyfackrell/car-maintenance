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
        return res.status(500).json({ error: 'Server error' });
    }
}



export const addMaintenanceItem = async (req, res) => {
    // add item and returns the item
    const { data, error } = await supabase
    .from('maintenance_log')
    .insert({ })
    .select()
}

export const editMaintenanceItem = async (req, res) => {
    // update and returns the item
    const { data, error } = await supabase
    .from('maintenance_log')
    .update({  })
    .eq('id', 1)
    .select()
}

export const deleteMaintenanceItem = async (req, res) => {
    // delete and returns the item
    const { data, error } = await supabase
    .from('maintenance_log')
    .delete()
    .eq('id', 1)
    .select()
}
