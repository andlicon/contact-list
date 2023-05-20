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

  return wasDeleted;
};