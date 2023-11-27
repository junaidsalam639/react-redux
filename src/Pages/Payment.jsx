import React from 'react'
import SideNav from '../components/SideNav';
import './page.css'

const Payment = () => {
  const handlersumbit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='margin px-4'>
      <SideNav />
      <form onSubmit={handlersumbit}>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="font-semibold leading-7 text-gray-900">Personal Information</h2>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                <div class="mt-2">
                  <input type="text" required name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-2 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                <div class="mt-2">
                  <input required type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-2 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">email</label>
                <div class="mt-2">
                  <input required type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-2 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                <div class="mt-2">
                  <input required type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-2 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                <div class="mt-2">
                  <input required type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-2 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                <div class="mt-2">
                  <input required type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-2 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                <div class="mt-2">
                  <input required type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-2 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                <div class="mt-2">
                  <input required type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-2 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-3 mb-4 flex items-center justify-end gap-x-6">
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Payment
