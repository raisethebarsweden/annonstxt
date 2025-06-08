try {
  console.log('Anropar API med regnr:', regnr);
  const data = await api.GetVehicleInformation(regnr);
  console.log('Data från API:', data);
  return res.status(200).json({ data });
} catch (error) {
  console.error('Fel vid hämtning av fordonsinfo:', error);
  return res.status(500).json({
    error: 'Fel vid hämtning av fordonsinfo',
    details: error.message || error.toString(),
  });
}
