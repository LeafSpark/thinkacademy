package com.eaydu.omni.net.okhttp3;

import java.net.InetSocketAddress;
import java.net.Proxy;
import java.util.Objects;

public final class Route {
    final Address address;
    final InetSocketAddress inetSocketAddress;
    final Proxy proxy;

    public Route(Address address2, Proxy proxy2, InetSocketAddress inetSocketAddress2) {
        Objects.requireNonNull(address2, "address == null");
        Objects.requireNonNull(proxy2, "proxy == null");
        Objects.requireNonNull(inetSocketAddress2, "inetSocketAddress == null");
        this.address = address2;
        this.proxy = proxy2;
        this.inetSocketAddress = inetSocketAddress2;
    }

    public Address address() {
        return this.address;
    }

    public Proxy proxy() {
        return this.proxy;
    }

    public InetSocketAddress socketAddress() {
        return this.inetSocketAddress;
    }

    public boolean requiresTunnel() {
        return this.address.sslSocketFactory != null && this.proxy.type() == Proxy.Type.HTTP;
    }

    public boolean equals(Object obj) {
        if (obj instanceof Route) {
            Route route = (Route) obj;
            return route.address.equals(this.address) && route.proxy.equals(this.proxy) && route.inetSocketAddress.equals(this.inetSocketAddress);
        }
    }

    public int hashCode() {
        return ((((527 + this.address.hashCode()) * 31) + this.proxy.hashCode()) * 31) + this.inetSocketAddress.hashCode();
    }

    public String toString() {
        return "Route{" + this.inetSocketAddress + "}";
    }
}
