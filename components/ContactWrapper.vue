<template>
  <section class="contact-section-page section-ptb-150" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-12" data-aos="fade-up" data-aos-delay="200">
          <div class="section-title primary text-center pb-60">
            <div class="icon">
              <img src="/images/icon/testimonial.png" alt="Icon_not_found" />
            </div>
            <h3 class="title">Contact us</h3>
            <span class="hr-secondary"></span>
          </div>
        </div>
      </div>
      <div class="contact-form-card">
        <div class="row mtn-35">
          <div class="col-lg-6 mt-35">
            <div class="section-title">
              <h3 class="title">Get In Touch.</h3>
              <span class="comment-hr mb-0"></span>
            </div>
            <div class="contact-media contact-media-list">
              <div class="icon">
                <span class="icofont-send-mail"></span>
              </div>
              <div class="content">
                <span class="text">Email:</span>
                <a href="mailto:admin@compose.co.in" class="number">admin@compose.co.in</a>
              </div>
            </div>

            <div class="contact-media contact-media-list mt-xl-8">
              <div class="icon">
                <span class="icofont-linkedin"></span>
              </div>
              <div class="content">
                <span class="text">Linkedin:</span>
                <a href="https://www.linkedin.com/in/compose-tech-services-opc-pvt-ltd/" class="number">Compose Tech</a>
              </div>
            </div>
            <div class="contact-media contact-media-list">
              <div class="icon">
                <span class="icofont-map-pins"></span>
              </div>
              <div class="content">
                <span class="text">Address:</span>
                <h3 class="number">H.no. 135, Street No:641, Ongole, Andhra Pradesh, 523001</h3>
              </div>
            </div>
          </div>
           <div class="col-lg-6 mt-35">
            <div class="section-title">
              <h3 class="title">Send Us A Message</h3>
              <span class="comment-hr mb-0"></span>
            </div>
            <div class="comment-form pt-xl-8">
              <form class="row gx-4" @submit.prevent="submitForm">
                <div class="col-12 col-sm-6">
                  <input v-model="formData.name" class="form-control" placeholder="Enter Your Name" type="text" />
                </div>
                <div class="col-12 col-sm-6">
                  <input v-model="formData.email" class="form-control" placeholder="Enter Your Email" type="text" />
                </div>
                <div class="col-12">
                  <input v-model="formData.subject" class="form-control" placeholder="Enter Your Subject" type="text" />
                </div>
                <div class="col-12">
                  <textarea v-model="formData.message" placeholder="Type your question" class="form-control textarea-control" cols="30" rows="10"></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-warning">
                    Submit Comment
                    <i class="icofont-rounded-double-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-12 mt-35">
            <iframe
              class="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57067174.13924448!2d41.842609402440026!3d15.500208774520445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b011c10366c03%3A0x6ee40296fd2dbcc5!2sOngole%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1736837991039!5m2!1sen!2sin"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = async () => {
  try {
    const response = await axios.post("https://compose-profile-be.vercel.app/api/send-email", formData.value);
console.log("Responsee",response,formData)
    if (response.status === 200) {
      alert("Email sent successfully!");
      formData.value = { name: "", email: "", subject: "", message: "" };
    } else {
      alert("Failed to send email. Please try again later.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again later.");
  }
};
</script>
