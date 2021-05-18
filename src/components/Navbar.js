import React, { useState } from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-gray-100 w-full">
            <div className="lg:px-20 px-8 mx-auto">
                <div className="flex justify-between py-7">
                    <div className="flex justify-start lg:justify-around w-full lg:w-5/6">
                        <div className="">
                            <svg className="h-10" viewBox="0 0 350 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.5938 14.375C29.0156 14.375 31.5625 14.4609 34.2344 14.6328C36.9062 14.8047 39.7188 15.1406 42.6719 15.6406V21.5938C41.625 21.2969 40.4297 21.0156 39.0859 20.75C37.9297 20.5312 36.5391 20.3203 34.9141 20.1172C33.2891 19.9141 31.4531 19.7812 29.4062 19.7188V50.0469H23.8281V19.7188C21.7812 19.7812 19.9453 19.9141 18.3203 20.1172C16.6953 20.3203 15.3047 20.5312 14.1484 20.75C12.8047 21.0156 11.6094 21.2969 10.5625 21.5938V15.6406C13.4844 15.1406 16.2969 14.8047 19 14.6328C21.7031 14.4609 24.2344 14.375 26.5938 14.375ZM105.062 31.8125L110.266 23.2812H112.047C113.453 23.3594 114.703 23.4609 115.797 23.5859C116.891 23.7109 117.82 23.8359 118.586 23.9609C119.477 24.1016 120.266 24.25 120.953 24.4062V29.8438C120.547 29.625 120.016 29.4297 119.359 29.2578C118.703 29.0703 118 28.9219 117.25 28.8125C116.516 28.6875 115.773 28.5938 115.023 28.5312C114.273 28.4688 113.594 28.4375 112.984 28.4375L107.969 36.6406L112.984 44.8438C113.594 44.8438 114.273 44.8125 115.023 44.75C115.773 44.6875 116.516 44.6016 117.25 44.4922C118 44.3672 118.703 44.2188 119.359 44.0469C120.016 43.8594 120.547 43.6562 120.953 43.4375V48.875C120.266 49.0312 119.477 49.1797 118.586 49.3203C117.82 49.4453 116.891 49.5703 115.797 49.6953C114.703 49.8203 113.453 49.9219 112.047 50H110.266L105.062 41.5156L99.9062 50H98.125C96.7188 49.9219 95.4688 49.8203 94.375 49.6953C93.2812 49.5703 92.3516 49.4453 91.5859 49.3203C90.6953 49.1797 89.9062 49.0312 89.2188 48.875V43.4375C89.6094 43.6562 90.1328 43.8594 90.7891 44.0469C91.4453 44.2188 92.1406 44.3672 92.875 44.4922C93.625 44.6016 94.375 44.6875 95.125 44.75C95.8906 44.8125 96.5781 44.8438 97.1875 44.8438L102.156 36.6406L97.1875 28.4375C96.5781 28.4375 95.8906 28.4688 95.125 28.5312C94.375 28.5938 93.625 28.6875 92.875 28.8125C92.1406 28.9219 91.4453 29.0703 90.7891 29.2578C90.1328 29.4297 89.6094 29.625 89.2188 29.8438V24.4062C89.9062 24.25 90.6953 24.1016 91.5859 23.9609C92.3516 23.8359 93.2812 23.7109 94.375 23.5859C95.4688 23.4609 96.7188 23.3594 98.125 23.2812H99.9062L105.062 31.8125ZM134.453 50H128.5V23.2812H134.453V50ZM131.5 14C132.656 14 133.57 14.1953 134.242 14.5859C134.914 14.9609 135.25 15.5625 135.25 16.3906V17.5625C135.25 18.3125 134.914 18.8516 134.242 19.1797C133.57 19.5078 132.656 19.6719 131.5 19.6719C130.391 19.6719 129.492 19.5078 128.805 19.1797C128.133 18.8516 127.797 18.3125 127.797 17.5625V16.3906C127.797 15.5625 128.133 14.9609 128.805 14.5859C129.492 14.1953 130.391 14 131.5 14ZM158.828 22.8594C160.125 22.8594 161.43 22.9219 162.742 23.0469C164.055 23.1719 165.312 23.375 166.516 23.6562C167.719 23.9375 168.844 24.2891 169.891 24.7109C170.938 25.1328 171.844 25.6406 172.609 26.2344C173.391 26.8281 174 27.5156 174.438 28.2969C174.875 29.0625 175.094 29.9219 175.094 30.875L169.094 31.7656C169.094 31.0938 168.805 30.4922 168.227 29.9609C167.648 29.4141 166.883 28.9609 165.93 28.6016C164.977 28.2266 163.883 27.9453 162.648 27.7578C161.414 27.5547 160.141 27.4531 158.828 27.4531C157.578 27.4531 156.344 27.5469 155.125 27.7344C153.906 27.9062 152.812 28.1719 151.844 28.5312C150.891 28.8906 150.109 29.3438 149.5 29.8906C148.906 30.4219 148.609 31.0469 148.609 31.7656V41.5156C148.609 42.2344 148.906 42.8594 149.5 43.3906C150.109 43.9062 150.891 44.3438 151.844 44.7031C152.812 45.0469 153.906 45.3047 155.125 45.4766C156.344 45.6484 157.578 45.7344 158.828 45.7344C160.141 45.7344 161.414 45.6406 162.648 45.4531C163.883 45.2656 164.977 45 165.93 44.6562C166.883 44.2969 167.648 43.8594 168.227 43.3438C168.805 42.8125 169.094 42.2031 169.094 41.5156L175.094 43.0156C175.094 43.8594 174.875 44.6328 174.438 45.3359C174 46.0391 173.391 46.6719 172.609 47.2344C171.844 47.7812 170.938 48.2578 169.891 48.6641C168.844 49.0703 167.719 49.4062 166.516 49.6719C165.312 49.9375 164.055 50.1328 162.742 50.2578C161.43 50.3984 160.125 50.4688 158.828 50.4688C157.531 50.4688 156.227 50.3984 154.914 50.2578C153.617 50.1328 152.367 49.9375 151.164 49.6719C149.961 49.4062 148.836 49.0703 147.789 48.6641C146.758 48.2578 145.852 47.7812 145.07 47.2344C144.305 46.6719 143.703 46.0469 143.266 45.3594C142.828 44.6562 142.609 43.875 142.609 43.0156V30.875C142.609 29.9219 142.828 29.0625 143.266 28.2969C143.703 27.5156 144.305 26.8281 145.07 26.2344C145.852 25.6406 146.758 25.1328 147.789 24.7109C148.836 24.2891 149.961 23.9375 151.164 23.6562C152.367 23.375 153.617 23.1719 154.914 23.0469C156.227 22.9219 157.531 22.8594 158.828 22.8594ZM196.375 22.8594C197.688 22.8594 198.992 22.9219 200.289 23.0469C201.602 23.1719 202.859 23.375 204.062 23.6562C205.266 23.9375 206.391 24.2891 207.438 24.7109C208.484 25.1328 209.391 25.6406 210.156 26.2344C210.938 26.8281 211.547 27.5156 211.984 28.2969C212.422 29.0625 212.641 29.9219 212.641 30.875V43.0156C212.641 43.8594 212.422 44.6328 211.984 45.3359C211.547 46.0391 210.938 46.6719 210.156 47.2344C209.391 47.7812 208.484 48.2578 207.438 48.6641C206.391 49.0703 205.266 49.4062 204.062 49.6719C202.859 49.9375 201.602 50.1328 200.289 50.2578C198.977 50.3984 197.672 50.4688 196.375 50.4688C195.078 50.4688 193.773 50.3984 192.461 50.2578C191.164 50.1328 189.914 49.9375 188.711 49.6719C187.508 49.4062 186.383 49.0703 185.336 48.6641C184.305 48.2578 183.398 47.7812 182.617 47.2344C181.852 46.6719 181.25 46.0469 180.812 45.3594C180.375 44.6562 180.156 43.875 180.156 43.0156V30.875C180.156 29.9219 180.375 29.0625 180.812 28.2969C181.25 27.5156 181.852 26.8281 182.617 26.2344C183.398 25.6406 184.305 25.1328 185.336 24.7109C186.383 24.2891 187.508 23.9375 188.711 23.6562C189.914 23.375 191.164 23.1719 192.461 23.0469C193.773 22.9219 195.078 22.8594 196.375 22.8594ZM186.109 41.5156C186.109 42.2344 186.406 42.8594 187 43.3906C187.609 43.9062 188.398 44.3438 189.367 44.7031C190.336 45.0469 191.43 45.3047 192.648 45.4766C193.883 45.6484 195.125 45.7344 196.375 45.7344C197.688 45.7344 198.953 45.6406 200.172 45.4531C201.406 45.2656 202.5 45 203.453 44.6562C204.406 44.2969 205.164 43.8594 205.727 43.3438C206.305 42.8125 206.594 42.2031 206.594 41.5156V31.7656C206.594 31.0938 206.305 30.4922 205.727 29.9609C205.164 29.4141 204.406 28.9609 203.453 28.6016C202.5 28.2266 201.406 27.9453 200.172 27.7578C198.953 27.5547 197.688 27.4531 196.375 27.4531C195.125 27.4531 193.883 27.5469 192.648 27.7344C191.43 27.9062 190.336 28.1719 189.367 28.5312C188.398 28.8906 187.609 29.3438 187 29.8906C186.406 30.4219 186.109 31.0469 186.109 31.7656V41.5156ZM224.5 50H219.156V14.7969H224.5V50ZM248.781 22.8594C250.094 22.8594 251.398 22.9219 252.695 23.0469C254.008 23.1719 255.266 23.375 256.469 23.6562C257.672 23.9375 258.797 24.2891 259.844 24.7109C260.891 25.1328 261.797 25.6406 262.562 26.2344C263.344 26.8281 263.953 27.5156 264.391 28.2969C264.828 29.0625 265.047 29.9219 265.047 30.875V43.0156C265.047 43.8594 264.828 44.6328 264.391 45.3359C263.953 46.0391 263.344 46.6719 262.562 47.2344C261.797 47.7812 260.891 48.2578 259.844 48.6641C258.797 49.0703 257.672 49.4062 256.469 49.6719C255.266 49.9375 254.008 50.1328 252.695 50.2578C251.383 50.3984 250.078 50.4688 248.781 50.4688C247.484 50.4688 246.18 50.3984 244.867 50.2578C243.57 50.1328 242.32 49.9375 241.117 49.6719C239.914 49.4062 238.789 49.0703 237.742 48.6641C236.711 48.2578 235.805 47.7812 235.023 47.2344C234.258 46.6719 233.656 46.0469 233.219 45.3594C232.781 44.6562 232.562 43.875 232.562 43.0156V30.875C232.562 29.9219 232.781 29.0625 233.219 28.2969C233.656 27.5156 234.258 26.8281 235.023 26.2344C235.805 25.6406 236.711 25.1328 237.742 24.7109C238.789 24.2891 239.914 23.9375 241.117 23.6562C242.32 23.375 243.57 23.1719 244.867 23.0469C246.18 22.9219 247.484 22.8594 248.781 22.8594ZM238.516 41.5156C238.516 42.2344 238.812 42.8594 239.406 43.3906C240.016 43.9062 240.805 44.3438 241.773 44.7031C242.742 45.0469 243.836 45.3047 245.055 45.4766C246.289 45.6484 247.531 45.7344 248.781 45.7344C250.094 45.7344 251.359 45.6406 252.578 45.4531C253.812 45.2656 254.906 45 255.859 44.6562C256.812 44.2969 257.57 43.8594 258.133 43.3438C258.711 42.8125 259 42.2031 259 41.5156V31.7656C259 31.0938 258.711 30.4922 258.133 29.9609C257.57 29.4141 256.812 28.9609 255.859 28.6016C254.906 28.2266 253.812 27.9453 252.578 27.7578C251.359 27.5547 250.094 27.4531 248.781 27.4531C247.531 27.4531 246.289 27.5469 245.055 27.7344C243.836 27.9062 242.742 28.1719 241.773 28.5312C240.805 28.8906 240.016 29.3438 239.406 29.8906C238.812 30.4219 238.516 31.0469 238.516 31.7656V41.5156ZM285.344 23.2812C286.672 23.2812 288.023 23.3359 289.398 23.4453C290.773 23.5391 292.094 23.6719 293.359 23.8438C294.641 24 295.836 24.1875 296.945 24.4062C298.07 24.625 299.047 24.8594 299.875 25.1094H300.25V51.1719C300.25 52.2812 300.016 53.3125 299.547 54.2656C299.078 55.2188 298.398 56.0391 297.508 56.7266C296.617 57.4297 295.523 57.9766 294.227 58.3672C292.93 58.7578 291.453 58.9531 289.797 58.9531V54.875C290.422 54.875 291 54.8125 291.531 54.6875C292.062 54.5625 292.523 54.3672 292.914 54.1016C293.32 53.8516 293.633 53.5312 293.852 53.1406C294.086 52.7656 294.203 52.3281 294.203 51.8281V48.2188C292.781 48.7656 291.305 49.2031 289.773 49.5312C288.258 49.8438 286.781 50 285.344 50C282.938 50 280.789 49.8359 278.898 49.5078C277.008 49.1641 275.406 48.6406 274.094 47.9375C272.781 47.2344 271.781 46.3438 271.094 45.2656C270.406 44.1875 270.062 42.9062 270.062 41.4219V31.8594C270.062 30.375 270.406 29.0938 271.094 28.0156C271.781 26.9375 272.781 26.0469 274.094 25.3438C275.406 24.6406 277.008 24.125 278.898 23.7969C280.789 23.4531 282.938 23.2812 285.344 23.2812ZM287.031 45.3125C287.891 45.3125 288.68 45.2578 289.398 45.1484C290.117 45.0234 290.766 44.8672 291.344 44.6797C291.938 44.4922 292.469 44.2969 292.938 44.0938C293.422 43.875 293.844 43.6719 294.203 43.4844V28.9062C293.781 28.75 293.289 28.5938 292.727 28.4375C292.18 28.2812 291.586 28.1484 290.945 28.0391C290.32 27.9141 289.672 27.8203 289 27.7578C288.328 27.6797 287.672 27.6406 287.031 27.6406C285.578 27.6406 284.195 27.6797 282.883 27.7578C281.57 27.8359 280.422 28.0469 279.438 28.3906C278.453 28.7344 277.664 29.2656 277.07 29.9844C276.492 30.6875 276.203 31.6719 276.203 32.9375V39.8281C276.203 40.6562 276.336 41.3672 276.602 41.9609C276.867 42.5547 277.234 43.0547 277.703 43.4609C278.188 43.8672 278.766 44.1953 279.438 44.4453C280.109 44.6797 280.844 44.8672 281.641 45.0078C282.438 45.1328 283.289 45.2188 284.195 45.2656C285.117 45.2969 286.062 45.3125 287.031 45.3125ZM312.906 39.125C312.906 40 313.023 40.7578 313.258 41.3984C313.492 42.0234 313.812 42.5625 314.219 43.0156C314.625 43.4531 315.086 43.8125 315.602 44.0938C316.133 44.375 316.688 44.5938 317.266 44.75C317.844 44.8906 318.43 44.9922 319.023 45.0547C319.617 45.1016 320.188 45.125 320.734 45.125C322.719 45.125 324.523 44.8672 326.148 44.3516C327.773 43.8359 329.219 43.2031 330.484 42.4531V23.2812L336.531 23.75V51.1719C336.531 52.2812 336.297 53.3125 335.828 54.2656C335.359 55.2188 334.68 56.0391 333.789 56.7266C332.898 57.4297 331.805 57.9766 330.508 58.3672C329.211 58.7578 327.734 58.9531 326.078 58.9531V54.875C326.703 54.875 327.281 54.8125 327.812 54.6875C328.344 54.5625 328.805 54.3672 329.195 54.1016C329.602 53.8516 329.914 53.5312 330.133 53.1406C330.367 52.7656 330.484 52.3281 330.484 51.8281V46.9062C329.75 47.3594 329 47.7734 328.234 48.1484C327.484 48.5234 326.695 48.8516 325.867 49.1328C325.039 49.3984 324.172 49.6094 323.266 49.7656C322.359 49.9219 321.406 50 320.406 50C317.984 50 315.914 49.8047 314.195 49.4141C312.477 49.0078 311.062 48.4141 309.953 47.6328C308.859 46.8359 308.055 45.8516 307.539 44.6797C307.023 43.5078 306.766 42.1406 306.766 40.5781V23.75L312.906 23.2812V39.125Z" fill="#48bf84"/>
                                <path d="M63.4929 18.75C64.8815 18.75 66.1954 19.0469 67.4346 19.5C68.4275 18.6953 69.1964 17.6016 69.6369 16.3203C67.7556 15.4688 65.6803 14.9922 63.5004 14.9922C61.328 14.9922 59.2527 15.461 57.3714 16.3125C57.8119 17.5938 58.5808 18.6875 59.5737 19.4922C60.8054 19.0469 62.1119 18.75 63.4929 18.75ZM54.2136 44.2735C55.1094 43.3516 55.7365 42.211 56.0426 40.961C53.5865 38.8985 51.9516 35.8594 51.6456 32.3985C51.011 32.1797 50.3615 32.0391 49.6747 32.0391C49.1074 32.0391 48.54 32.1172 47.995 32.2813C48.3011 37.1875 50.6676 41.5 54.2136 44.2735ZM70.9508 40.9453C71.2568 42.1953 71.8839 43.3438 72.7798 44.2656C76.3183 41.4922 78.6848 37.1797 78.9759 32.2735C78.4384 32.1172 77.8785 32.0391 77.3186 32.0391C76.6318 32.0391 75.9749 32.1875 75.3329 32.4063C75.0268 35.8594 73.3919 38.8828 70.9508 40.9453ZM79.4239 24.9297C78.11 24.1172 76.714 23.6328 75.2956 23.375C75.7435 21.9922 76.0421 20.5313 76.0421 18.9844C76.0421 15.7813 74.9596 12.6719 72.9813 10.2188C72.7947 9.98439 72.4886 9.9297 72.2348 10.0781C71.9884 10.2266 71.8765 10.5469 71.966 10.836C72.302 11.9141 72.4587 12.8906 72.4587 13.8438C72.4587 19.1406 68.4424 23.4453 63.5004 23.4453C58.5584 23.4453 54.5421 19.1406 54.5421 13.8438C54.5421 12.8985 54.7063 11.9141 55.0348 10.836C55.1244 10.5469 55.0124 10.2266 54.766 10.0781C54.5122 9.9297 54.2061 9.98439 54.0195 10.2188C52.0487 12.6719 50.9587 15.7813 50.9587 18.9844C50.9587 20.5313 51.2499 21.9922 51.7053 23.375C50.2943 23.6328 48.8909 24.1172 47.577 24.9297C44.994 26.5313 43.0232 29.0938 42.0303 32.1485C41.9332 32.4375 42.0452 32.75 42.2916 32.9141C42.5379 33.0703 42.8515 33.0156 43.0381 32.7891C43.7398 31.9453 44.4565 31.2969 45.2179 30.8281C49.4956 28.1797 54.9825 29.7578 57.4535 34.3438C59.9245 38.9297 58.4539 44.8125 54.1763 47.461C53.4148 47.9375 52.5339 48.2735 51.5037 48.5078C51.2275 48.5703 51.0259 48.836 51.0259 49.1406C51.0334 49.4531 51.2275 49.711 51.5112 49.7656C54.4749 50.375 57.5282 49.8281 60.1112 48.2266C61.4549 47.3985 62.5673 46.3125 63.4929 45.0938C64.4186 46.3125 65.531 47.3985 66.8747 48.2266C69.4577 49.8281 72.511 50.375 75.4747 49.7656C75.7584 49.711 75.9525 49.4531 75.96 49.1406C75.96 48.836 75.7659 48.5703 75.4822 48.5078C74.4445 48.2813 73.5711 47.9375 72.8096 47.461C68.532 44.8125 67.0614 38.9297 69.5324 34.3438C72.0034 29.7578 77.4903 28.1797 81.768 30.8281C82.5294 31.3047 83.2461 31.9453 83.9478 32.7891C84.1344 33.0156 84.448 33.0703 84.6943 32.9141C84.9407 32.7578 85.0527 32.4375 84.9556 32.1485C83.9777 29.0938 82.0068 26.5235 79.4239 24.9297ZM63.4929 35.0078C61.5147 35.0078 59.9096 33.3281 59.9096 31.2578C59.9096 29.1875 61.5147 27.5078 63.4929 27.5078C65.4712 27.5078 67.0763 29.1875 67.0763 31.2578C67.0763 33.3281 65.4712 35.0078 63.4929 35.0078Z" fill="#48bf84"/>
                            </svg>
                        </div>

                        <div className="lg:flex hidden items-center text-md uppercase space-x-8">
                            <Link to="/main" className="hover:text-lime-400">Главная</Link>
                            <Link to="/api" className="hover:text-lime-400">API</Link>
                            <Link to="/toxicity" className="hover:text-lime-400">Анализ</Link>
                            <Link to="/about" className="hover:text-lime-400">Контакты</Link>
                            <Link to="/analysis/request" className="hover:text-lime-400">Запрос на заявку</Link>
                        </div>
                    </div>
                    <div className="lg:flex hidden items-center">
                        <div className="bg-greenspace-400 w-10 h-10 rounded-3xl"/>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            { isOpen &&
            <div className="lg:hidden uppercase flex flex-col">
                <a href="#" className="hover:bg-lime-400 hover:text-white py-4 px-8">Главная</a>
                <a href="#" className="hover:bg-lime-400 hover:text-white py-4 px-8">API</a>
                <a href="#" className="hover:bg-lime-400 hover:text-white py-4 px-8">Инфо</a>
                <a href="#" className="hover:bg-lime-400 hover:text-white py-4 px-8">Контакты</a>
            </div>
            }
        </nav>
    );
}

export default Navbar;
