const deleteTask = async (id) => {
  try {
    await fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
  }
};

const getTasks = async () => {
  try {
    const res = await fetch('/api/tasks');
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const updateTask = async (id, status) => {
  try {
    await fetch(`/api/tasks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(status),
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
  }
};

const createNewTask = async (name) => {
  try {
    await fetch('/api/tasks/create', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
  }
};

export { getTasks, createNewTask, updateTask, deleteTask };
