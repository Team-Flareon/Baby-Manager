import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

export default function Notification() {
  const clickHandler = async e => {
    let notificationBody = {
      to: 2069534101, //this can be number or string
      body: 'this is a schedule message',
      date: new Date('January 29, 2022 17:10:00'),
    };

    console.log(notificationBody);
    const res = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(notificationBody),
    });

    const data = await res.json();

    // if (data.success) {
    //   await setNumber("");
    //   await setBody("");
    // } else {
    //   await setNumber("An Error has occurred.");
    //   await setBody("An Error has occurred.");
    // }
  };
  return (
    <div>
      <Head>
        <title>Notification Test Page</title>
      </Head>
      <div>
        <button onClick={clickHandler}>try to send a message</button>
      </div>
    </div>
  );
}
