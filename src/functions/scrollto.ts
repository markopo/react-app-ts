

export function scrollTo(ref: any) {
    window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
    });
}