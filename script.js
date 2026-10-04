/* Ring of Fire website interaction and content layer */

const IMAGE_BASE = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/';

const dataStore = {
    'Mayon Volcano': {
        type: 'volcano', tag: 'VOLCANO', title: 'MAYON VOLCANO',
        subtitle: 'Stratovolcano (Active) • Elevation: 2,462 m',
        location: 'Albay, Bicol Region',
        subduction: 'Associated with the Bicol volcanic arc and regional subduction',
        history: '50+ historical eruptions recorded; major activity includes 2018 and 2023',
        hazards: 'Pyroclastic Density Currents, Lahars, Ashfall',
        image: IMAGE_BASE + 'Mayon_volcano.jpg'
    },
    'Mt. Pinatubo': {
        type: 'volcano', tag: 'VOLCANO', title: 'MT. PINATUBO',
        subtitle: 'Stratovolcano • Elevation: 1,486 m',
        location: 'Zambales, Tarlac, Pampanga',
        subduction: 'West Luzon volcanic arc associated with the Manila Trench system',
        history: 'Cataclysmic eruption: June 15, 1991',
        hazards: 'Pyroclastic Flows, Lahars, Ashfall',
        image: IMAGE_BASE + 'Mt_Pinatubo_Eruption,_1991_(50700829252).png'
    },
    'Taal Volcano': {
        type: 'volcano', tag: 'VOLCANO', title: 'TAAL VOLCANO',
        subtitle: 'Complex Volcano / Caldera System • Elevation: 311 m',
        location: 'Batangas, Luzon',
        subduction: 'Southern Luzon volcanic system',
        history: 'Numerous historical eruptions; major eruption episode in 2020',
        hazards: 'Ashfall, Base Surges, Ballistic Fragments, Volcanic Tsunami',
        image: IMAGE_BASE + 'Taal_Volcano_of_the_Philippines.jpg'
    },
    'Mt. Kanlaon': {
        type: 'volcano', tag: 'VOLCANO', title: 'MOUNT KANLAON',
        subtitle: 'Stratovolcano (Active) • Elevation: 2,435 m',
        location: 'Negros Island, Visayas',
        subduction: 'Negros volcanic arc / western Visayas subduction system',
        history: 'Repeated historical eruptions; explosive activity recorded in 2024–2025',
        hazards: 'Ashfall, Pyroclastic Density Currents, Lahars',
        image: IMAGE_BASE + 'Kanlaon_Volcano_Negros_Occidental,_Philippines.jpg'
    },
    'Bulusan Volcano': {
        type: 'volcano', tag: 'VOLCANO', title: 'BULUSAN VOLCANO',
        subtitle: 'Stratovolcano (Active) • Elevation: 1,565 m',
        location: 'Sorsogon, Bicol Region',
        subduction: 'Bicol volcanic arc',
        history: 'Frequent historical unrest and eruptions; recent eruptive activity in 2022',
        hazards: 'Ashfall, Pyroclastic Density Currents, Lahars',
        image: IMAGE_BASE + 'Mt-Bulusan.jpg'
    },
    'Hibok-Hibok Volcano': {
        type: 'volcano', tag: 'VOLCANO', title: 'HIBOK-HIBOK VOLCANO',
        subtitle: 'Stratovolcano / Dome Complex • Elevation: 1,332 m',
        location: 'Camiguin Island, Northern Mindanao',
        subduction: 'Mindanao volcanic arc',
        history: 'Last major eruption: 1951',
        hazards: 'Pyroclastic Flows, Lahars, Ashfall',
        image: IMAGE_BASE + 'Mount_Hibok-Hibok_(Catarman_Volcano),_Camiguin_Island,_Philippines_(52314108123).jpg'
    },
    'Mount Iraya': {
        type: 'volcano', tag: 'VOLCANO', title: 'MOUNT IRAYA',
        subtitle: 'Stratovolcano • Elevation: 1,009 m',
        location: 'Batan Island, Batanes',
        subduction: 'Northern Philippine volcanic system',
        history: 'Historical eruptions are recorded; last known eruption in the 19th century',
        hazards: 'Ashfall, Pyroclastic Activity, Lahars',
        image: IMAGE_BASE + 'Mount-Iraya.JPG'
    },
    'Mount Matutum': {
        type: 'volcano', tag: 'VOLCANO', title: 'MOUNT MATUTUM',
        subtitle: 'Stratovolcano • Elevation: 2,286 m',
        location: 'South Cotabato, Mindanao',
        subduction: 'Southern Mindanao volcanic system',
        history: 'Classified as an active volcano; no confirmed historical eruption is recorded in the modern period',
        hazards: 'Volcanic Unrest, Ashfall, Lahars',
        image: IMAGE_BASE + 'Mt._Matutum,_Philippines.jpg'
    },
    'Manila Trench': {
        type: 'trench', tag: 'TRENCH', title: 'MANILA TRENCH',
        subtitle: 'Subduction Trench • Depth: about 5,400 m',
        location: 'West of Luzon and Mindoro',
        subduction: 'Oceanic lithosphere of the South China Sea region subducts beneath the Philippine Mobile Belt',
        history: 'A major convergent boundary west of Luzon',
        hazards: 'Submarine Earthquakes and Tsunami Potential',
        image: IMAGE_BASE + 'Philippine_plate_tectonics_-_selected_profiles.png'
    },
    'Philippine Trench': {
        type: 'trench', tag: 'TRENCH', title: 'PHILIPPINE TRENCH',
        subtitle: 'Subduction Trench • Maximum depth about 10,540 m',
        location: 'East of the Philippine archipelago',
        subduction: 'Philippine Sea Plate subducts westward beneath the Philippine Mobile Belt',
        history: 'One of the deepest submarine trenches in the Philippine region',
        hazards: 'Megathrust Earthquakes and Tsunamis',
        image: IMAGE_BASE + 'Philippine_plate_tectonics_-_selected_profiles.png'
    },
    '1990 Luzon M7.8': {
        type: 'earthquake', tag: 'EARTHQUAKE', title: '1990 LUZON EARTHQUAKE',
        subtitle: 'Magnitude 7.8 Strike-Slip Seismic Event',
        location: 'Rizal, Nueva Ecija / Central Luzon',
        subduction: 'Crustal shear along the Philippine Fault System',
        history: 'July 16, 1990 • approximately 125 km surface rupture',
        hazards: 'Ground Rupture, Strong Shaking, Landslides, Liquefaction',
        image: IMAGE_BASE + '1990_Luzon_earthquake.jpg'
    },
    '1976 Moro Gulf M8.0': {
        type: 'earthquake', tag: 'EARTHQUAKE', title: '1976 MORO GULF EARTHQUAKE',
        subtitle: 'Magnitude 8.0 Megathrust / Tsunami Earthquake',
        location: 'Moro Gulf, Southwestern Mindanao',
        subduction: 'Cotabato Trench subduction interface',
        history: 'August 17, 1976',
        hazards: 'Devastating Tsunami Waves, Strong Ground Shaking',
        image: IMAGE_BASE + '1976_Moro_Gulf_earthquake.jpg'
    },
    '2013 Bohol M7.2': {
        type: 'earthquake', tag: 'EARTHQUAKE', title: '2013 BOHOL EARTHQUAKE',
        subtitle: 'Magnitude 7.2 Tectonic Earthquake',
        location: 'Bohol, Central Visayas',
        subduction: 'Fault-related tectonic earthquake in the Visayan region',
        history: 'October 15, 2013',
        hazards: 'Strong Shaking, Ground Failure, Landslides, Structural Damage',
        image: IMAGE_BASE + '7.2_Bohol,_Philippines_quake.jpg'
    },
    '1994 Mindoro M7.1': {
        type: 'earthquake', tag: 'EARTHQUAKE', title: '1994 MINDORO EARTHQUAKE',
        subtitle: 'Magnitude 7.1 Strike-Slip Earthquake',
        location: 'Mindoro / Verde Island Passage',
        subduction: 'Associated with the Aglubang River Fault',
        history: 'November 15, 1994',
        hazards: 'Strong Shaking, Tsunami, Landslides, Ground Rupture',
        image: IMAGE_BASE + 'Shake_Map_Mindoro_1994.jpg'
    }
};

function setModalTag(item) {
    const tag = document.getElementById('modal-tag');
    if (!tag) return;
    tag.textContent = item.tag;
    tag.className = `absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-black text-white uppercase tracking-wider shadow-lg modal-tag modal-tag-${item.type}`;
}

window.openModal = function(key) {
    const item = dataStore[key];
    if (!item) {
        console.warn('No popup data for:', key);
        return;
    }
    setModalTag(item);
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-subtitle').textContent = item.subtitle;
    document.getElementById('modal-location').textContent = item.location;
    document.getElementById('modal-subduction').textContent = item.subduction;
    document.getElementById('modal-history').textContent = item.history;
    document.getElementById('modal-hazards').textContent = item.hazards;
    const img = document.getElementById('modal-img');
    img.alt = item.title;
    img.src = item.image;
    img.onerror = function() {
        // Exact same subject, alternate Wikimedia file where available.
        const fallback = {
            'Mayon Volcano': IMAGE_BASE + 'Mt._Mayon_Volcano,_Philippines.jpg',
            'Mt. Pinatubo': IMAGE_BASE + 'Mount_Pinatubo,_Philippines_ESA14603899.jpeg',
            'Taal Volcano': IMAGE_BASE + 'Taal_Volcano_in_the_Philippines.jpg',
            'Mt. Kanlaon': IMAGE_BASE + 'Kanlaon_Volcano_Negros_Occidental,_Philippines.jpg',
            'Bulusan Volcano': IMAGE_BASE + 'Mount_Bulusan_and_Sorsogon_Bay.jpg',
            'Hibok-Hibok Volcano': IMAGE_BASE + 'Mount_Hibok-Hibok_(Catarman_Volcano),_Camiguin_Island,_Philippines_(52314108123).jpg',
            'Mount Iraya': IMAGE_BASE + 'Mount_Iraya.jpg',
            'Mount Matutum': IMAGE_BASE + 'Mount_Matutum.jpg',
            '1990 Luzon M7.8': IMAGE_BASE + '1990_Luzon_earthquake.jpg',
            '1976 Moro Gulf M8.0': IMAGE_BASE + '1976_Moro_Gulf_earthquake.jpg',
            '2013 Bohol M7.2': IMAGE_BASE + '2013_philippines_shake_map.jpg',
            '1994 Mindoro M7.1': IMAGE_BASE + 'Shake_Map_Mindoro_1994.jpg'
        };
        if (fallback[key] && img.src !== fallback[key]) img.src = fallback[key];
    };
    document.getElementById('modal-backdrop').classList.remove('hidden');
    document.body.classList.add('modal-open');
};

window.closeModal = function() {
    const modal = document.getElementById('modal-backdrop');
    if (modal) modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
};

function createVolcanoCard(key) {
    const item = dataStore[key];
    return `<div onclick="openModal('${key}')" class="volcano-card bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition cursor-pointer group">
        <div class="h-48 overflow-hidden relative"><img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500"><div class="absolute top-3 right-3 px-2.5 py-1 bg-orange-600/90 backdrop-blur-md rounded-lg text-xs font-bold text-white">${item.subtitle.split('•')[0].trim()}</div></div>
        <div class="p-5"><span class="text-xs text-orange-400 font-semibold uppercase">${item.location}</span><h3 class="text-xl font-bold text-white mt-1 mb-2">${item.title.replace('MOUNT ', 'Mt. ')}</h3><p class="text-slate-400 text-sm line-clamp-2">${item.history}. Primary hazards include ${item.hazards.toLowerCase()}.</p></div>
    </div>`;
}

function createEarthquakeCard(key) {
    const item = dataStore[key];
    const magnitude = item.subtitle.match(/Magnitude [0-9.]+/)?.[0] || 'Earthquake';
    return `<div onclick="openModal('${key}')" class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-orange-500/50 transition cursor-pointer flex flex-col justify-between">
        <div><div class="flex items-center justify-between mb-4"><span class="px-3 py-1 bg-red-600/20 text-red-400 border border-red-500/40 rounded-full text-xs font-bold">${magnitude}</span><span class="text-slate-400 text-xs font-medium">${item.history.split(' • ')[0]}</span></div><h3 class="text-2xl font-bold text-white mb-2">${item.title}</h3><p class="text-slate-300 text-sm leading-relaxed mb-4">${item.hazards} are among the hazards associated with this event.</p></div><div class="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400"><span>${item.location}</span><span class="text-orange-400 font-semibold">View Details &rarr;</span></div>
    </div>`;
}

function addExtraCatalogCards() {
    const volcanoGrid = document.getElementById('volcano-grid');
    if (volcanoGrid && !document.getElementById('extra-volcano-cards')) {
        const wrap = document.createElement('div');
        wrap.id = 'extra-volcano-cards';
        wrap.style.display = 'contents';
        wrap.innerHTML = [
            'Bulusan Volcano', 'Hibok-Hibok Volcano', 'Mount Iraya', 'Mount Matutum'
        ].map(createVolcanoCard).join('');
        volcanoGrid.appendChild(wrap);
    }

    const earthquakeSection = document.getElementById('earthquakes');
    const earthquakeGrid = earthquakeSection?.querySelector('.grid');
    if (earthquakeGrid && !document.getElementById('extra-earthquake-cards')) {
        const wrap = document.createElement('div');
        wrap.id = 'extra-earthquake-cards';
        wrap.style.display = 'contents';
        wrap.innerHTML = ['2013 Bohol M7.2', '1994 Mindoro M7.1'].map(createEarthquakeCard).join('');
        earthquakeGrid.appendChild(wrap);
    }

    // Replace the existing generic/stock catalog images with the exact Wikimedia images.
    document.querySelectorAll('#volcano-grid .volcano-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        let key = Object.keys(dataStore).find(k => dataStore[k].type === 'volcano' && text.includes(k.toLowerCase()));
        if (key) {
            const image = card.querySelector('img');
            if (image) image.src = dataStore[key].image;
        }
    });
}

function addMapMarker(mapOverlay, key, position, label, kind='volcano') {
    const item = dataStore[key];
    if (!item || document.querySelector(`[data-map-key="${key}"]`)) return;
    const marker = document.createElement('div');
    marker.dataset.mapKey = key;
    marker.className = `pointer-events-auto absolute ${position} transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group text-center map-marker`;
    marker.onclick = () => window.openModal(key);
    if (kind === 'earthquake') {
        marker.innerHTML = `<div class="w-10 h-10 rounded-full border-2 border-red-500 animate-ping absolute -inset-2 opacity-75"></div><div class="relative w-7 h-7 bg-red-600 border-2 border-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition"><div class="w-2 h-2 bg-yellow-300 rounded-full"></div></div><div class="mt-1 px-2 py-0.5 bg-red-950/90 border border-red-500 rounded text-[9px] font-bold text-white shadow whitespace-nowrap">${label}</div>`;
    } else {
        marker.innerHTML = `<div class="marker-halo"></div><div class="w-6 h-6 mx-auto bg-orange-600 border-2 border-white rounded-sm transform rotate-45 flex items-center justify-center shadow-lg group-hover:scale-125 transition"><div class="w-2 h-2 bg-white rounded-full"></div></div><div class="mt-1 inline-block px-2 py-0.5 bg-black/80 border border-orange-500 rounded text-[9px] font-bold text-yellow-300 shadow whitespace-nowrap">${label}</div>`;
    }
    mapOverlay.appendChild(marker);
}

function addExtraMapMarkers() {
    const map = document.getElementById('interactive-map');
    const overlay = map?.querySelector('.absolute.inset-0.z-20');
    if (!overlay) return;
    addMapMarker(overlay, 'Bulusan Volcano', 'top-[55%] left-[42%]', 'Bulusan Volcano');
    addMapMarker(overlay, 'Hibok-Hibok Volcano', 'top-[50%] left-[62%]', 'Hibok-Hibok');
    addMapMarker(overlay, '2013 Bohol M7.2', 'top-[66%] left-[58%]', '2013 Bohol M7.2', 'earthquake');
    addMapMarker(overlay, '1994 Mindoro M7.1', 'top-[38%] right-[28%]', '1994 Mindoro M7.1', 'earthquake');
}

function addIntroHazardsSafetyReferences() {
    if (document.getElementById('ring-of-fire')) return;
    const tectonic = document.getElementById('tectonic');
    const intro = document.createElement('section');
    intro.id = 'ring-of-fire';
    intro.className = 'py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full';
    intro.innerHTML = `<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-7 relative overflow-hidden group hover:border-orange-500/50 transition"><div class="absolute -right-8 -top-8 w-28 h-28 bg-orange-500/10 rounded-full blur-2xl"></div><span class="text-orange-500 text-xs font-bold uppercase tracking-widest">The Philippine Ring of Fire</span><h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">The Philippine Ring of Fire</h2><p class="text-slate-300 text-sm leading-relaxed mb-4">The Philippines is part of the Pacific Ring of Fire, a region around the Pacific Ocean where earthquakes and volcanic eruptions frequently occur. This activity is caused by the movement of tectonic plates beneath Earth’s surface.<sup>[1][2]</sup></p><p class="text-orange-300 text-sm font-semibold">Explore the map to learn about the Philippines’ volcanoes, trenches, faults, and earthquake hazards.</p></div>
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-7 relative overflow-hidden group hover:border-orange-500/50 transition"><span class="text-orange-500 text-xs font-bold uppercase tracking-widest">About the Ring of Fire</span><h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">A Global Zone of Plate Activity</h2><p class="text-slate-300 text-sm leading-relaxed">The Ring of Fire is a horseshoe-shaped zone surrounding the Pacific Ocean. It contains many volcanoes, deep ocean trenches, and active fault lines.</p><p class="text-slate-300 text-sm leading-relaxed mt-4">Most of its earthquakes and volcanoes occur near tectonic plate boundaries. One important process is <em class="text-white">subduction</em>, in which one plate sinks beneath another. This movement can cause earthquakes and create magma that may rise and form volcanoes.<sup>[1]</sup></p></div>
    </div>`;
    tectonic?.parentNode.insertBefore(intro, tectonic);

    const summary = document.getElementById('summary');
    if (!summary) return;
    const block = document.createElement('div');
    block.id = 'additional-sectors';
    block.innerHTML = `<section id="common-hazards" class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"><div class="text-center md:text-left mb-10"><span class="text-orange-500 text-xs font-bold uppercase tracking-widest">Geological Hazards</span><h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-2">Common Hazards</h2><p class="text-slate-400 mt-2 text-base">Major hazards associated with earthquakes, volcanoes, and tectonic activity in the Philippines.</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-orange-500/50 transition"><div class="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold text-lg mb-4">01</div><h3 class="text-xl font-bold text-white mb-2">Earthquakes</h3><p class="text-slate-300 text-sm leading-relaxed">Earthquakes happen when energy is suddenly released along a fault or plate boundary. Strong earthquakes can damage buildings, cause landslides, and generate tsunamis.</p></div><div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-orange-500/50 transition"><div class="w-10 h-10 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center font-bold text-lg mb-4">02</div><h3 class="text-xl font-bold text-white mb-2">Volcanic Eruptions</h3><p class="text-slate-300 text-sm leading-relaxed">Eruptions can release lava, ash, volcanic gases, and fast-moving hot materials. Lahars, or volcanic mudflows, may also occur when ash mixes with rainwater.</p></div><div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-orange-500/50 transition"><div class="w-10 h-10 rounded-xl bg-yellow-600/20 text-yellow-400 flex items-center justify-center font-bold text-lg mb-4">03</div><h3 class="text-xl font-bold text-white mb-2">Tsunamis</h3><p class="text-slate-300 text-sm leading-relaxed">Undersea earthquakes and volcanic eruptions can displace seawater and produce tsunamis. Coastal communities should follow official evacuation warnings.</p></div></div></section>
        <section id="safety" class="py-20 bg-[#060913] star-bg relative"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center md:text-left mb-10"><span class="text-orange-500 text-xs font-bold uppercase tracking-widest">Preparedness</span><h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-2">Safety Tips</h2><p class="text-slate-400 mt-2 text-base">Simple actions can reduce risk during strong earthquakes and other hazards.</p></div><div class="bg-slate-900/90 border border-slate-800 rounded-3xl p-7 lg:p-10"><h3 class="text-2xl font-bold text-white mb-4">During an earthquake, remember <strong class="text-orange-500">Drop, Cover, and Hold On</strong>:</h3><ol class="space-y-4 text-slate-300 text-sm sm:text-base"><li class="flex gap-4 items-start"><span class="w-10 h-10 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center font-bold text-lg flex-shrink-0">01</span><span>Drop to your hands and knees.</span></li><li class="flex gap-4 items-start"><span class="w-10 h-10 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center font-bold text-lg flex-shrink-0">02</span><span>Cover your head and neck under a sturdy table or desk.</span></li><li class="flex gap-4 items-start"><span class="w-10 h-10 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center font-bold text-lg flex-shrink-0">03</span><span>Hold on until the shaking stops.</span></li></ol><div class="mt-7 pt-6 border-t border-slate-800 text-slate-300 text-sm leading-relaxed">People should also prepare an emergency kit, secure heavy furniture, identify evacuation routes, and follow updates from <strong class="text-white">DOST-PHIVOLCS</strong> and local authorities.</div></div></div></section>
        <section id="references" class="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full"><div class="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12"><span class="text-orange-500 text-xs font-bold uppercase tracking-widest">Sources</span><h2 class="text-3xl font-extrabold text-white mt-2 mb-6">References</h2><ol class="space-y-3 text-sm text-slate-300 leading-relaxed list-decimal list-inside"><li><a class="reference-link" href="https://www.usgs.gov/faqs/what-a-hotspot-and-how-do-you-know-its-there" target="_blank" rel="noopener noreferrer">U.S. Geological Survey. “What is a hotspot and how do you know it's there?”</a></li><li><a class="reference-link" href="https://www.usgs.gov/programs/earthquake-hazards/cool-earthquake-facts" target="_blank" rel="noopener noreferrer">U.S. Geological Survey. “Cool Earthquake Facts.”</a></li><li><a class="reference-link" href="https://www.phivolcs.dost.gov.ph/volcanoes-of-the-philippines/" target="_blank" rel="noopener noreferrer">Philippine Institute of Volcanology and Seismology. “Volcanoes of the Philippines.”</a></li><li><a class="reference-link" href="https://www.ready.gov/earthquakes" target="_blank" rel="noopener noreferrer">Ready.gov. “Earthquakes.”</a></li><li><a class="reference-link" href="https://pubs.usgs.gov/fs/2017/3024/fs20173024.pdf" target="_blank" rel="noopener noreferrer">U.S. Geological Survey. “Reducing Risk Where Tectonic Plates Collide.”</a></li><li><a class="reference-link" href="https://pubs.usgs.gov/gip/dynamic/understanding.html" target="_blank" rel="noopener noreferrer">U.S. Geological Survey. “Understanding plate motions.”</a></li><li><a class="reference-link" href="https://www.usgs.gov/special-topics/subduction-zone-science/science" target="_blank" rel="noopener noreferrer">U.S. Geological Survey. “Subduction Zone Science.”</a></li><li><a class="reference-link" href="https://oceanexplorer.noaa.gov/ocean-fact/rof/" target="_blank" rel="noopener noreferrer">NOAA Ocean Exploration. “What is the Ring of Fire?”</a></li><li><a class="reference-link" href="https://oceanexplorer.noaa.gov/explorations/05fire/background/edu/edu.html" target="_blank" rel="noopener noreferrer">NOAA Ocean Exploration. “Education Lesson Plans.”</a></li><li><a class="reference-link" href="https://oceanexplorer.noaa.gov/explorations/05fire/background/volcanism/volcanism.html" target="_blank" rel="noopener noreferrer">NOAA Ocean Exploration. “Arc Volcanism.”</a></li><li><a class="reference-link" href="https://www.usgs.gov/media/images/subduction-zone-3" target="_blank" rel="noopener noreferrer">U.S. Geological Survey. “Subduction zone.”</a></li><li><a class="reference-link" href="https://pubs.usgs.gov/gip/19/downloads/Appendixes/I_Volcanism%20in%20a%20Plate%20Tectonics%20Perspective.pdf" target="_blank" rel="noopener noreferrer">U.S. Geological Survey. “Volcanism in a Plate Tectonics Perspective.”</a></li><li><a class="reference-link" href="https://www.livescience.com/43220-subduction-zone-definition.html" target="_blank" rel="noopener noreferrer">Live Science. “What is a subduction zone?”</a></li><li><a class="reference-link" href="https://www.usgs.gov/faqs/how-many-active-volcanoes-are-there-earth" target="_blank" rel="noopener noreferrer">U.S. Geological Survey. “How many active volcanoes are there on Earth?”</a></li><li><a class="reference-link" href="https://www.usgs.gov/faqs/when-did-lassen-peak-last-erupt" target="_blank" rel="noopener noreferrer">U.S. Geological Survey. “When did Lassen Peak last erupt?”</a></li><li><a class="reference-link" href="https://www.usgs.gov/faqs/how-much-earth-is-volcanic" target="_blank" rel="noopener noreferrer">U.S. Geological Survey. “How much of the Earth is volcanic?”</a></li><li><a class="reference-link" href="https://www.usgs.gov/programs/earthquake-hazards/100-chance-earthquake" target="_blank" rel="noopener noreferrer">U.S. Geological Survey. “100% Chance of an Earthquake.”</a></li><li><a class="reference-link" href="https://www.usgs.gov/glossary/earthquake-hazards-program" target="_blank" rel="noopener noreferrer">U.S. Geological Survey. “Earthquake Hazards Program.”</a></li></ol><div class="mt-8 pt-6 border-t border-slate-800 space-y-2 text-xs text-slate-400 break-words"><p>[1] <a class="reference-link" href="https://www.usgs.gov/faqs/what-a-hotspot-and-how-do-you-know-its-there" target="_blank" rel="noopener noreferrer">https://www.usgs.gov/faqs/what-a-hotspot-and-how-do-you-know-its-there</a></p><p>[2] <a class="reference-link" href="https://www.usgs.gov/programs/earthquake-hazards/cool-earthquake-facts" target="_blank" rel="noopener noreferrer">https://www.usgs.gov/programs/earthquake-hazards/cool-earthquake-facts</a></p><p>[3] <a class="reference-link" href="https://www.phivolcs.dost.gov.ph/volcanoes-of-the-philippines/" target="_blank" rel="noopener noreferrer">https://www.phivolcs.dost.gov.ph/volcanoes-of-the-philippines/</a></p><p>[4] <a class="reference-link" href="https://www.ready.gov/earthquakes" target="_blank" rel="noopener noreferrer">https://www.ready.gov/earthquakes</a></p><p>[5] <a class="reference-link" href="https://pubs.usgs.gov/fs/2017/3024/fs20173024.pdf" target="_blank" rel="noopener noreferrer">https://pubs.usgs.gov/fs/2017/3024/fs20173024.pdf</a></p><p>[6] <a class="reference-link" href="https://pubs.usgs.gov/gip/dynamic/understanding.html" target="_blank" rel="noopener noreferrer">https://pubs.usgs.gov/gip/dynamic/understanding.html</a></p><p>[7] <a class="reference-link" href="https://www.usgs.gov/special-topics/subduction-zone-science/science" target="_blank" rel="noopener noreferrer">https://www.usgs.gov/special-topics/subduction-zone-science/science</a></p><p>[8] <a class="reference-link" href="https://oceanexplorer.noaa.gov/ocean-fact/rof/" target="_blank" rel="noopener noreferrer">https://oceanexplorer.noaa.gov/ocean-fact/rof/</a></p><p>[9] <a class="reference-link" href="https://oceanexplorer.noaa.gov/explorations/05fire/background/edu/edu.html" target="_blank" rel="noopener noreferrer">https://oceanexplorer.noaa.gov/explorations/05fire/background/edu/edu.html</a></p><p>[10] <a class="reference-link" href="https://oceanexplorer.noaa.gov/explorations/05fire/background/volcanism/volcanism.html" target="_blank" rel="noopener noreferrer">https://oceanexplorer.noaa.gov/explorations/05fire/background/volcanism/volcanism.html</a></p><p>[11] <a class="reference-link" href="https://www.usgs.gov/media/images/subduction-zone-3" target="_blank" rel="noopener noreferrer">https://www.usgs.gov/media/images/subduction-zone-3</a></p><p>[12] <a class="reference-link" href="https://pubs.usgs.gov/gip/19/downloads/Appendixes/I_Volcanism%20in%20a%20Plate%20Tectonics%20Perspective.pdf" target="_blank" rel="noopener noreferrer">https://pubs.usgs.gov/gip/19/downloads/Appendixes/I_Volcanism%20in%20a%20Plate%20Tectonics%20Perspective.pdf</a></p><p>[13] <a class="reference-link" href="https://www.livescience.com/43220-subduction-zone-definition.html" target="_blank" rel="noopener noreferrer">https://www.livescience.com/43220-subduction-zone-definition.html</a></p><p>[14] <a class="reference-link" href="https://www.usgs.gov/faqs/how-many-active-volcanoes-are-there-earth" target="_blank" rel="noopener noreferrer">https://www.usgs.gov/faqs/how-many-active-volcanoes-are-there-earth</a></p><p>[15] <a class="reference-link" href="https://www.usgs.gov/faqs/when-did-lassen-peak-last-erupt" target="_blank" rel="noopener noreferrer">https://www.usgs.gov/faqs/when-did-lassen-peak-last-erupt</a></p><p>[16] <a class="reference-link" href="https://www.usgs.gov/faqs/how-much-earth-is-volcanic" target="_blank" rel="noopener noreferrer">https://www.usgs.gov/faqs/how-much-earth-is-volcanic</a></p><p>[17] <a class="reference-link" href="https://www.usgs.gov/programs/earthquake-hazards/100-chance-earthquake" target="_blank" rel="noopener noreferrer">https://www.usgs.gov/programs/earthquake-hazards/100-chance-earthquake</a></p><p>[18] <a class="reference-link" href="https://www.usgs.gov/glossary/earthquake-hazards-program" target="_blank" rel="noopener noreferrer">https://www.usgs.gov/glossary/earthquake-hazards-program</a></p></div></div></section>`;
    summary.parentNode.insertBefore(block, summary);
    const refs = document.getElementById('references');
    if (refs) summary.after(refs);
}

function styleExistingMapMarkers() {
    document.querySelectorAll('#interactive-map .map-marker, #interactive-map .floating-star[onclick]').forEach(marker => {
        marker.classList.remove('floating-star');
        marker.classList.add('map-marker');
    });
    // Add a bobbing halo around volcano symbols without moving the label/point itself.
    document.querySelectorAll('#interactive-map .map-marker').forEach(marker => {
        const symbol = marker.querySelector('.bg-orange-600');
        if (symbol && !marker.querySelector('.marker-halo')) {
            const halo = document.createElement('div');
            halo.className = 'marker-halo';
            marker.insertBefore(halo, symbol);
        }
    });
}

function styleLegend() {
    const legend = document.querySelector('#interactive-map .absolute.bottom-4.left-4');
    if (!legend) return;
    legend.innerHTML = `<div class="font-bold text-orange-400 uppercase tracking-wider mb-2">Map Legend</div>
        <div class="flex items-center space-x-3"><div class="w-6 h-6 bg-orange-600 border-2 border-white rounded-sm transform rotate-45 flex items-center justify-center flex-shrink-0 shadow-lg"><div class="w-2 h-2 bg-white rounded-full"></div></div><span class="text-slate-300">Active Volcano</span></div>
        <div class="flex items-center space-x-3 mt-2"><div class="relative w-7 h-7 flex items-center justify-center flex-shrink-0"><div class="w-10 h-10 rounded-full border-2 border-red-500 animate-ping absolute opacity-75"></div><div class="relative w-7 h-7 bg-red-600 border-2 border-white rounded-full flex items-center justify-center shadow-lg"><div class="w-2 h-2 bg-yellow-300 rounded-full"></div></div></div><span class="text-slate-300">Earthquake Epicenter</span></div>
        <div class="flex items-center space-x-3 mt-2"><div class="px-3 py-1.5 bg-red-600/90 border border-red-300 rounded-lg shadow-2xl flex-shrink-0"><span class="text-[10px] font-black text-white tracking-wider">≡ TRENCH</span></div><span class="text-slate-300">Subduction Trench</span></div>`;
}

function updateNavigation() {
    const nav = document.querySelector('header nav');
    if (!nav || nav.dataset.updated) return;
    nav.dataset.updated = 'true';
    const summary = nav.querySelector('a[href="#summary"]');
    if (summary) {
        const hazards = document.createElement('a'); hazards.href = '#common-hazards'; hazards.className = 'text-slate-300 hover:text-orange-400 transition'; hazards.textContent = 'Hazards';
        const refs = document.createElement('a'); refs.href = '#references'; refs.className = 'text-slate-300 hover:text-orange-400 transition'; refs.textContent = 'References';
        summary.before(hazards); summary.after(refs);
    }
    const tectonic = nav.querySelector('a[href="#tectonic"]');
    if (tectonic && !nav.querySelector('a[href="#ring-of-fire"]')) {
        const ring = document.createElement('a'); ring.href = '#ring-of-fire'; ring.className = 'text-slate-300 hover:text-orange-400 transition'; ring.textContent = 'Ring of Fire'; tectonic.before(ring);
    }
}

function init() {
    const mapDescription = document.querySelector('#interactive-map p');
    if (mapDescription) mapDescription.textContent = 'Click any marker to inspect detailed information in the popup card. The marker itself stays in place while its surrounding halo blinks and gently floats.';
    addIntroHazardsSafetyReferences();
    addExtraCatalogCards();
    styleExistingMapMarkers();
    addExtraMapMarkers();
    styleLegend();
    updateNavigation();

    const backdrop = document.getElementById('modal-backdrop');
    if (backdrop && !backdrop.dataset.bound) {
        backdrop.dataset.bound = 'true';
        backdrop.addEventListener('click', e => { if (e.target === backdrop) window.closeModal(); });
    }
    document.addEventListener('keydown', e => { if (e.key === 'Escape') window.closeModal(); });
}

document.addEventListener('DOMContentLoaded', init);

window.filterVolcanoList = function() {
    const input = document.getElementById('volcano-search');
    if (!input) return;
    const query = input.value.toLowerCase();
    document.querySelectorAll('.volcano-card').forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(query) ? '' : 'none';
    });
};
