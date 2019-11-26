import React, { Component } from 'react'

export function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let i=0; i<cookies.length; i++) {
        if (cookies[i].indexOf(name) === -1) continue;

        let value = cookies[i].replace(name + "=", "");
        return value;
    }
}
