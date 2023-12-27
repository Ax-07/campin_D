export const TarifsCard = (data) => {
  const tarifs = data.data;

  return (
    <>
      <td className="tarifs__table-item tarifs__table-item-categories">{tarifs.catégories}</td>
      <td className="tarifs__table-item">{tarifs.details}</td>
      <td className="tarifs__table-item tarifs__table-item-price">{tarifs.nuitBS}</td>
      <td className="tarifs__table-item tarifs__table-item-price">{tarifs.semaineBS}</td>
      <td className="tarifs__table-item tarifs__table-item-price">{tarifs.nuitHS}</td>
      <td className="tarifs__table-item tarifs__table-item-price">{tarifs.semaineHS}</td>
    </>
  );
};

export const MentionLegales = (data) => {
  const mentionLegales = data.data;

  return (
    <>
      <th className="tarifs__table-item tarifs__table-item-mention" colSpan="6">{mentionLegales.mention}</th>
    </>
  );
};
