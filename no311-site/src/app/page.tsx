// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return (
        <Menu />
    );
  }

function Menu(){
    return (
        <ol>
            <li>Home</li>
            <li>Activities</li>

        </ol>
    );
}

