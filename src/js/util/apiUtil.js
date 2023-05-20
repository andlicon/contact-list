export const getAll = async (source) => {
  let allElements = [];

  try {
    const response = await fetch(source);

    let data;
    if (response.ok) data = await response.json();

    if (!response.ok) throw new Error('error connecting to the data base');

    allElements = data;

  }
  catch (error) {
    throw new Error(error.message);
  }

  return allElements;
};

export const deleteOne = async (source) => {
  let wasDeleted = false;

  try {
    const response = await fetch(source, {
      method: 'DELETE',
    });

    let data = await response.json();

    if (!response.ok) throw new Error(data.msg);

    wasDeleted = true;
  }
  catch (error) {
    throw new Error(error.message);
  }

  return wasDeleted;
};

export const createOne = async (source, element) => {
  try {
    const response = await fetch(source, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(element)
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.msg);

    return data;
  }
  catch (error) {
    throw new Error(error.message)
  }
}