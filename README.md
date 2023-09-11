<p align="center">
  <img src=".github/logo.png" width="200" alt="Storage Cookies logo">
</p>

<h1 align="center">Storage Cookies</h1>

<p align="center">
  <a href="#-why">Why</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-what-is">What is</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-next-steps">Next Steps</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=b40f20&labelColor=000000">
</p>

## 🤔 Why

The purpose of creating this script was to resolve cookie-related caching issues on amplify hosting when using nextjs

## ✈ What is

The script is a middleware in the document.cookie getter and setter functions.  
It prevents the creation of new cookies by third-party scripts, while keeping them all saved in localStorage, maintaining the normal functioning of cookies on the frontend, including expirations.

## 🚀 Next Steps

Some improvements that I intend to adjust:

- [ ] Add method to add and remove cookies without going through middleware, for cases such as authentication.
- [ ] Add ways to change the local-storage key name.
- [ ] Add way to set a safelist for cookies.
- [ ] Check operation on multiple websites and third-party scripts.

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.