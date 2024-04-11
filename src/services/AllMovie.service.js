export async function getAllMovie (){ 
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api',{cache:"no-store"});
    const data = await res.json();
    return data;
}

export async function getAllMovieById (id){ 
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`,{cache:"no-store"});
    const data = await res.json();
    return data;
}

export async function getMovie (para){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/?genre=${para}`,{cache:"no-cache"});
    const data = await res.json();
    return data; 
}
