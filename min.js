// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Home = { template: '<div><h3>This is the Home Page</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>' }
const About = { template: '<div><h3>About</h3><p>Donec interdum blandit cursus. Nam hendrerit nunc vitae mauris lobortis rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet libero in nulla luctus luctus. Nullam luctus metus at nisl pulvinar, sed consequat lacus finibus. Nulla et felis sit amet est tincidunt sollicitudin eget a nunc. Nulla condimentum velit non ex efficitur ullamcorper. Curabitur ipsum risus, porta ut urna eu, molestie ultrices enim. Aenean efficitur est orci, bibendum sollicitudin diam tristique tincidunt. In ultrices eros ac nulla suscipit pretium. Nullam condimentum augue eu tellus venenatis fermentum. Pellentesque vel accumsan mauris. Integer aliquet cursus erat in rhoncus. Cras suscipit tortor non turpis ornare, non commodo felis hendrerit. </p></div>' }
const Services = { template: '<div><h3>Services</h3><p>Etiam tempor hendrerit commodo. Donec blandit elit ac rutrum gravida. Nulla arcu velit, mattis at mauris eget, bibendum commodo est. Duis eget ligula pellentesque, vulputate elit sed, egestas risus. Fusce sollicitudin metus suscipit eros faucibus mattis in a nulla. Etiam sed ante a turpis molestie tincidunt vitae eu quam. Ut in tortor sed leo molestie varius.</p><p>Curabitur eleifend, purus a tincidunt vestibulum, velit orci auctor massa, eget cursus orci arcu accumsan massa. Pellentesque vel augue metus. Aenean pellentesque nec arcu in rutrum. Donec non lectus vel magna aliquam tincidunt vitae a velit. Nunc pulvinar aliquam ipsum, quis pharetra ligula aliquet id. Curabitur at leo tempus, convallis leo ut, eleifend massa. Quisque vel urna vel nibh cursus iaculis. In luctus erat rutrum, posuere neque in, mollis ligula.</p><p>In sed neque id nulla lobortis sodales. Nunc lobortis aliquam lectus, sit amet ornare ex consequat a. Nam eget quam sit amet turpis dictum imperdiet in malesuada sem. Aliquam ante purus, vestibulum et augue id, laoreet porta sapien. Ut congue laoreet neque, non ultrices urna lacinia sollicitudin. Vestibulum hendrerit, eros non hendrerit vestibulum, ante odio posuere turpis, vitae cursus metus sapien at dui. Ut non pretium sapien. Sed facilisis vestibulum egestas. Ut a purus venenatis, dictum nunc vel, vehicula felis. Mauris auctor leo et dolor ultrices mattis.</p></div>' }
const Contact = { template: 
	'<div class="form"><h3>Contact</h3><div class="form-group">        <input type="text" name="name" class="form-control" placeholder="Enter your name">      </div>      <div class="form-group">        <input type="text" name="email" class="form-control" placeholder="Enter your email" />      </div>      <div class="form-group">        <textarea name="message" class="form-control" placeholder="Enter your message"></textarea>      </div>      <button class="btn btn-primary" type="submit">Send Message</button>    </div>' 
}


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact }

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!