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
  const [formValues, setFormValues] = useState(null);

  const inputFontSize = '0.8rem';
  const inputTheme = 'dark';

  function handleSubmit() {
    handleOnSubmit(formValues);
  }

  function handleChange(e) {
    const currentFormValues = '';
    console.log(e.target);
  }

  return (
    <ProductFormStyled onSubmit={handleSubmit}>
      <ProductPreview />
      <div className='form-inputs-container'>
        <Input icon={<GiCupcake className='input-icon' />} type='text' name='product-name' placeholder='Nom du produit' theme={inputTheme} fontSize={inputFontSize} />
        <Input
          icon={<BsFillCameraFill className='input-icon' />}
          type='text'
          name='product-img'
          placeholder="Lien URL d'une image (ex:https://la-photo-de-mon-produit.png)"
          theme={inputTheme}
          fontSize={inputFontSize}
        />
        <Input icon={<MdOutlineEuro className='input-icon' />} type='text' name='product-price' placeholder='Prix' theme={inputTheme} fontSize={inputFontSize} />
        {formType === 'add' ? (
          <ButtonBasic label='Ajouter un nouveau produit' fontSize='0.9rem' width='220px' bgColor={theme.colors.green} />
        ) : formType === 'update' ? (
          <ButtonBasic label='Ajouter un nouveau produit' width='220px' bgColor={theme.colors.success} />
        ) : (
          <p>Type de formulaire inconnu</p>
        )}
      </div>
    </ProductFormStyled>
  );
}

export default ProductForm;
