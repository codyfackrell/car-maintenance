export const getMaintenanceLog = async (req, res) => {
    const { data, error } = await supabase
    .from('maintenance_log')
    .select()
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
