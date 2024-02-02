import React, { useContext, useEffect, useState } from 'react';
import { AdminPanelContext } from '../../../context/AdminPanelContext';
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
  height: fit-content;
  margin: ${theme.spacing.lg} auto 0 ${theme.spacing.lg};

  .form-inputs-container {
    position: relative;
    width: clamp(450px, 60%, 750px);
    margin-left: ${theme.spacing.md};

    input {
      margin-top: 0;
    }

    button {
      margin-top: 0;
      border: 2px solid transparent;
      /* transition: all 0.1s ease-in-out; */
    }

    .alert-msg {
      display: none;
      opacity: 0;
      margin-left: 1em;
      font-weight: 600;
      color: ${theme.colors.success};
      transition: opacity 0.1s ease-in-out;

      span {
        position: relative;
        top: 5px;
        display: inline-block;
        width: 20px;
        aspect-ratio: 1/1;
        margin-right: 0.3em;
        border: 2px solid ${theme.colors.success};
        border-radius: 50px;

        text-align: center;
        overflow: hidden;
      }
    }

    ${props =>
      props.$isSubmitted
        ? `
      button {
        background-color: ${theme.colors.white};
        color: ${theme.colors.success};
        border-color: ${theme.colors.success};
      }

      .alert-msg {
        display: initial;
        opacity: 1;
      }
    `
        : ''}
  }
`;

function ProductForm({ handleOnSubmit, formType, handleUpdate }) {
  const { updatingItem } = useContext(AdminPanelContext);

  const formDefaultValues =
    formType === 'update' && updatingItem
      ? { 'product-name': updatingItem.title, 'product-img': updatingItem.imageSource, 'product-price': updatingItem.price }
      : { 'product-name': '', 'product-img': '', 'product-price': '' };
  const [formValues, setFormValues] = useState(formDefaultValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputFontSize = '0.8rem';
  const inputTheme = 'dark';

  useEffect(() => {
    if (formType === 'update' && updatingItem)
      return setFormValues({ 'product-name': updatingItem.title, 'product-img': updatingItem.imageSource, 'product-price': updatingItem.price });
  }, [updatingItem]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!formValues['product-price']) handleOnSubmit({ ...formValues, 'product-price': '0.00' });
    else handleOnSubmit(formValues);
    setFormValues(formDefaultValues);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 1900);
  }

  function handleChange(e) {
    const newFormValues = { ...formValues, [e.target.name]: e.target.value };
    setFormValues(newFormValues);
    if (formType === 'update') handleUpdate({ imageSource: newFormValues['product-img'], title: newFormValues['product-name'], price: newFormValues['product-price'] });
  }

  return (
    <ProductFormStyled onSubmit={handleSubmit} $isSubmitted={isSubmitted}>
      <ProductPreview imgUrl={formValues['product-img']} />
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
          attributesValues={{ type: 'number', name: 'product-price', placeholder: 'Prix', value: formValues['product-price'], required: false, step: '0.001' }}
          style={{ theme: inputTheme, fontSize: inputFontSize }}
          onChange={handleChange}
        />
        {formType === 'add' ? (
          <>
            <ButtonBasic label='Ajouter un nouveau produit' fontSize='0.9rem' width='220px' bgColor={theme.colors.green} />
            <span className='alert-msg'>
              <span>
                <FiCheck />
              </span>
              Ajouté avec succès !
            </span>
          </>
        ) : formType === 'update' ? (
          <p>
            Cliquer sur un produit pour le modifier <u>en temps réel</u>
          </p>
        ) : (
          <span>Type de formulaire inconnu</span>
        )}
      </div>
    </ProductFormStyled>
  );
}

export default ProductForm;
