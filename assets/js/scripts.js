function mapChange(button_id) {
    document.getElementById("London").style = "";
    document.getElementById("Paris").style = "";
    document.getElementById("Venice").style = "";
    document.getElementById("Wawel").style = "";
    if(button_id == "London") {
        document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24793.681559953093!2d-0.18008483902277414!3d51.501473629237196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760542e6182f3f%3A0x7bb7e385c39764c4!2sMuzeum%20Historii%20Naturalnej%20w%20Londynie!5e0!3m2!1spl!2spl!4v1682937810251!5m2!1spl!2spl";
        document.getElementById("London").style = "background-color: rgba(55, 193, 247, 0.7); color: white;";
    } else if(button_id == "Paris") {
        document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41988.585595614306!2d2.270295212463118!3d48.87181275752683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e7d297c973%3A0xe5eb004f23a758!2sPanteon%20w%20Pary%C5%BCu!5e0!3m2!1spl!2spl!4v1682940859574!5m2!1spl!2spl";
        document.getElementById("Paris").style= "background-color: rgba(55, 193, 247, 0.7); color: white;";
    } else if(button_id == "Venice") {
        document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.082202206312!2d12.339338241104715!3d45.42784426128765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eae2b963f3aa9%3A0xffe4fc6534e3277b!2sSan%20Giorgio%20Maggiore!5e0!3m2!1spl!2spl!4v1682940881547!5m2!1spl!2spl";
        document.getElementById("Venice").style = "background-color: rgba(55, 193, 247, 0.7); color: white;";
    } else if(button_id == "Wawel") {
        document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.7047198107275!2d19.933546747472114!3d50.05436253329876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6deacd4c89%3A0x899762cc99c87d68!2sSmok%20Wawelski!5e0!3m2!1spl!2spl!4v1682940899281!5m2!1spl!2spl";
        document.getElementById("Wawel").style = "background-color: rgba(55, 193, 247, 0.7); color: white;";
    }
}