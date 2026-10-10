'use client';
import { useState } from 'react';
const moods = [{ name: 'Earth & linen', wall: '#c8bba5', sofa: '#eee5d5', accent: '#815b3e' }, { name: 'Forest retreat', wall: '#8c9784', sofa: '#ded9c9', accent: '#34483c' }, { name: 'Clay & cream', wall: '#c49a82', sofa: '#f2e8d8', accent: '#a35e43' }];
export default function RoomPreview() {
  const [selected, setSelected] = useState(0);
  const mood = moods[selected];
  return <div className="room-preview"><svg viewBox="0 0 720 720" role="img" aria-label={`Interior concept in ${mood.name}: a curved sofa, oak table and sculptural lighting`}>
    <defs><linearGradient id="floor" x2="0" y2="1"><stop stopColor="#c8b59a"/><stop offset="1" stopColor="#a48a6a"/></linearGradient><linearGradient id="window"><stop stopColor="#f9f5e9"/><stop offset="1" stopColor="#d6dece"/></linearGradient><filter id="shadow"><feGaussianBlur stdDeviation="12"/></filter></defs>
    <rect width="720" height="720" fill={mood.wall}/><path d="M0 470H720V720H0Z" fill="url(#floor)"/>
    <path d="M410 75 Q520 -20 630 75 V470H410Z" fill="url(#window)"/><path d="M520 0V470M410 220H630" stroke="#e9e3d4" strokeWidth="10"/>
    <path d="M0 0H90V480H0M652 0H720V480H652" fill="#eee4ce" opacity=".7"/>
    <ellipse cx="325" cy="568" rx="282" ry="74" fill="#f1e9db"/><ellipse cx="310" cy="574" rx="207" ry="35" opacity=".2" filter="url(#shadow)"/>
    <path d="M90 442Q90 348 150 350H423Q480 355 480 430V530Q479 553 452 553H114Q90 552 90 520Z" fill={mood.sofa}/><path d="M108 461Q105 427 137 425H438Q466 430 462 466V513H108Z" fill="#d5ccbb"/><path d="M110 457H462M195 425V510M358 425V510" stroke="#bdb19c" strokeWidth="2" opacity=".6"/>
    <path d="M112 531V567M452 531V567" stroke="#695543" strokeWidth="9"/>
    <rect x="150" y="383" width="69" height="67" rx="12" fill={mood.accent} transform="rotate(-12 150 383)"/><rect x="342" y="378" width="70" height="67" rx="12" fill="#b2a589" transform="rotate(10 342 378)"/>
    <path d="M268 582V640M386 577V634" stroke="#614932" strokeWidth="14"/><ellipse cx="328" cy="570" rx="117" ry="38" fill="#8b6544"/><ellipse cx="328" cy="562" rx="117" ry="38" fill="#b38b63"/>
    <path d="M320 552L313 509Q327 493 342 509L336 552Z" fill="#ece0ca"/><path d="M326 508V461M330 487L352 470M325 484L301 465" stroke="#626e4d" strokeWidth="3"/><ellipse cx="349" cy="468" rx="12" ry="5" fill="#68734e" transform="rotate(-35 349 468)"/>
    <path d="M551 517V268" stroke="#4d453a" strokeWidth="6"/><ellipse cx="551" cy="523" rx="42" ry="9" fill="#4d453a"/><path d="M500 281L523 211H579L602 281Z" fill="#efe4cc"/>
    <rect x="153" y="115" width="135" height="166" fill="#71624b"/><rect x="160" y="122" width="121" height="152" fill="#eee3cf"/><path d="M180 250V170Q210 131 244 170V250" fill={mood.accent}/><circle cx="210" cy="203" r="25" fill="#c9b995"/>
  </svg><div className="room-caption"><span>Explore a palette · interior concept</span><span>01 / 03</span></div><div className="mood-controls" aria-label="Room colour palette">{moods.map((m, i) => <button key={m.name} aria-pressed={selected === i} onClick={() => setSelected(i)}><span style={{ background: m.wall }} />{m.name}</button>)}</div></div>;
}
