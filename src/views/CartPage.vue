<template>
    <div class="mt-8">
        <div class="flow-root">
            <ul role="list" class="-my-6 divide-y divide-gray-200">
            <li v-for="product in products" :key="product.id" class="flex py-6">
                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
                </div>

                <div class="ml-4 flex flex-1 flex-col">
                <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                        <a :href="product.href">{{ product.name }}</a>
                    </h3>
                    <p class="ml-4">{{ product.price }}</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                </div>
                
                <div class="flex flex-2 items-end justify-between text-sm text-gray-500">
                    <p class="text-gray-500">Qty {{ product.quantity }}</p>
                    <DropDown />
                    <div class="flex">
                    </div>
                    <div class="flex">
                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                    </div>
                </div>
                </div>
   
            </li>
            </ul>
        </div>
    </div>
    <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$262.00</p>
            </div>
            <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div class="mt-6">
            <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
            </div>
            <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
                or
                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="open = false">
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
                </button>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import DropDown from '../components/common/DropDown.vue';
  const props = defineProps({
      showCart: Number
  })

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

const open = ref(false);

watch(props ,(newValue, oldValue)=>{
      open.value = true;
},{deep: true})
</script>