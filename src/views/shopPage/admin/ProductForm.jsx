import React, { useState } from 'react';
import styled from 'styled-components';
import ProductPreview from '../../../components/ProductPreview';
import Input from '../../../components/Input';
import { GiCupcake } from 'react-icons/gi';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import { FiCheck } from 'react-icons/fi';
import ButtonBasic from '../../../components/ButtonBasic';
import { theme } from '../../../utils';

const ProductFormStyled = styled.form`
  display: flex;
  align-items: flex-start;
  margin: ${theme.spacing.lg} auto 0 ${theme.spacing.lg};

  .form-inputs-container {
    width: clamp(450px, 60%, 750px);
    margin-left: ${theme.spacing.md};

    input:first-of-type {
      margin-top: 0;
    }
  }
`;

function ProductForm({ handleOnSubmit, formType }) {
  const formDefaultValues = { 'product-name': '', 'product-img': '', 'product-price': '' };
  const [formValues, setFormValues] = useState(formDefaultValues);

  const inputFontSize = '0.8rem';
  const inputTheme = 'dark';

  function handleSubmit(e) {
    e.preventDefault();
    if (!formValues['product-price']) handleOnSubmit({ ...formValues, 'product-price': '0.00' });
    else handleOnSubmit(formValues);
    setFormValues(formDefaultValues);
  }

  function handleChange(e) {
    const newFormValues = { ...formValues, [e.target.name]: e.target.value };
    setFormValues(newFormValues);
  }

  return (
    <ProductFormStyled onSubmit={handleSubmit}>
      <ProductPreview />
      <div className='form-inputs-container'>
        <Input
          icon={<GiCupcake className='input-icon' />}
          attributesValues={{ type: 'text', name: 'product-name', placeholder: 'Nom du produit', value: formValues['product-name'], required: false }}
          style={{ theme: inputTheme, fontSize: inputFontSize }}
          onChange={handleChange}
        />
        <Input
          icon={<BsFillCameraFill className='input-icon' />}
          attributesValues={{
            type: 'text',
            name: 'product-img',
            placeholder: "Lien URL d'une image (ex:https://la-photo-de-mon-produit.png)",
            value: formValues['product-img'],
            required: false,
          }}
          style={{ theme: inputTheme, fontSize: inputFontSize }}
          onChange={handleChange}
        />
        <Input
          icon={<MdOutlineEuro className='input-icon' />}
          attributesValues={{ type: 'text', name: 'product-price', placeholder: 'Prix', value: formValues['product-price'], required: false }}
          style={{ theme: inputTheme, fontSize: inputFontSize }}
          onChange={handleChange}
        />
        {formType === 'add' ? (
          <ButtonBasic label='Ajouter un nouveau produit' fontSize='0.9rem' width='220px' bgColor={theme.colors.green} />
        ) : formType === 'update' ? (
          <ButtonBasic label='Modifier le produit' width='220px' bgColor={theme.colors.success} />
        ) : (
          <span>Type de formulaire inconnu</span>
        )}
      </div>
    </ProductFormStyled>
  );
}

export default ProductForm;
