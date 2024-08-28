import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";

export async function loader() {
    const res = await fetch("https://api.github.com/gists");
    return json(await res.json());
  }
  
const TeamSection = () =>{
    return (
        <section id="team" className="section">
        <div className="container">
            <h2 className="section-title">Our Team</h2>
            <div className="row">
                <div className="col-md-3 text-center team-member">
                    <img src="https://avatars.akamai.steamstatic.com/689748a0c1ed55c9dc3bcf95e0ff31639261a8de_full.jpg" alt="Team Member" className="img-fluid rounded-circle mb-3"/>
                    <h5>John Doe</h5>
                    <p>CEO</p>
                </div>
                <div className="col-md-3 text-center team-member">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzqeSMfwdSNCqkdhglwrErkpjImzU0VialsREPyEJWl64705ysP9qILsyOl8KLYzbggXM&usqp=CAU" alt="Team Member" className="img-fluid rounded-circle mb-3"/>
                    <h5>Jane Smith</h5>
                    <p>CTO</p>
                </div>
                <div className="col-md-3 text-center team-member">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkg1gJY90rjD5ZZagRGwVWrj2KeqsRR5AlLDb55Tp5E96M13QpCvTE69C8Qj5v-Nl_eX4&usqp=CAU" alt="Team Member" className="img-fluid rounded-circle mb-3"/>
                    <h5>Emily Johnson</h5>
                    <p>COO</p>
                </div>
                <div className="col-md-3 text-center team-member">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoHbe7ZPVnEpooVO0XbNQE-RcQCCBEG8WN7qZkmCexY5CWMuoz7AYeU_XhdekvuFvzu0&usqp=CAU" alt="Team Member" className="img-fluid rounded-circle mb-3"/>
                    <h5>Michael Brown</h5>
                    <p>CFO</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default TeamSection;