import instance from ".";

const fetchAllPets = async () => {
  const res = await instance.get("/pets");
  return res.data;
};

const fetchOnePets = async (id) => {
  const res = await instance.get(`/pets/${id}`);
  return res.data;
};

const createPet = async (name, image, type, adopted) => {
  const res = await instance.post("/pets", {
    name: name,
    image: image,
    type: type,
    adopted: adopted,
  });
  return res.data;
};

const deletePet = async (id) => {
  const res = await instance.delete(`/pets/${id}`);
  return res.data;
};

export { fetchAllPets, fetchOnePets, createPet, deletePet };
