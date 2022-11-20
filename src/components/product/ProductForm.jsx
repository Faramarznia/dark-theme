import React from 'react'

import { useForm } from 'react-hook-form'

const ProductForm = ({ handleCreateProduct }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    handleCreateProduct(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="title-input" className="form-label">
            عنوان
          </label>
          <input
            type="text"
            className={`form-control${errors.title ? ' is-invalid' : ''}`}
            data-testid="title-input"
            placeholder="گوشی‌ موبایل"
            {...register('title', { required: 'وارد کردن عنوان اجباری است' })}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title.message}</div>
          )}
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="price-input" className="form-label">
            قیمت
          </label>
          <input
            type="number"
            className={`form-control${errors.price ? ' is-invalid' : ''}`}
            data-testid="price-input"
            placeholder="1000"
            {...register('price', {
              required: 'وارد کردن قیمت اجباری است',
              min: {
                value: 100,
                message: 'مقدار قیمت باید حداقل 100 باشد',
              },
            })}
          />
          {errors.price && (
            <div className="invalid-feedback">{errors.price.message}</div>
          )}
        </div>
      </div>
      <div className="row mt-4">
        <div className="form-group col-md-6">
          <label htmlFor="category-select" className="form-label">
            دسته‌بندی
          </label>
          <select
            className="form-select"
            data-testid="category-select"
            {...register('category')}
          >
            <option value="mobile">موبایل</option>
            <option value="book">کتاب</option>
            <option value="tshirt">تیشرت</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="description-textarea" className="form-label">
            توضیحات
          </label>
          <textarea
            className={`form-control${errors.description ? ' is-invalid' : ''}`}
            data-testid="description-textarea"
            rows="3"
            {...register('description')}
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-4 float-start"
        data-testid="submit-button"
      >
        افزودن محصول
      </button>
    </form>
  )
}

export default ProductForm
